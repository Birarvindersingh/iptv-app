import React, { useState, useEffect } from "react";
import VideoPlayer from "./components/VideoPlayer";
import ChannelList from "./components/ChannelList";
import { parseM3U } from "./utils/parseM3U";
import axios from "axios";
import "./App.css";
import { FaSearch } from "react-icons/fa";

const App = () => {
  const [m3uUrl, setM3uUrl] = useState("");
  const [channels, setChannels] = useState([]);
  const [filteredChannels, setFilteredChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredChannels(
      channels.filter((channel) =>
        channel.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, channels]);

  const fetchM3U = async () => {
    if (!m3uUrl.trim()) return alert("Please enter a valid M3U URL!");
    setLoading(true);
    try {
      const response = await axios.get(m3uUrl);
      const parsedChannels = parseM3U(response.data);
      setChannels(parsedChannels);
      setFilteredChannels(parsedChannels);
      setSelectedChannel(null);
    } catch (error) {
      console.error("Error loading M3U:", error);
      alert("Failed to load M3U file. Check the URL and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>IPTV Player</h1>
      </header>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter M3U URL here..."
          value={m3uUrl}
          onChange={(e) => setM3uUrl(e.target.value)}
        />
        <button onClick={fetchM3U} disabled={loading}>
          {loading ? "Loading..." : "Load Channels"}
        </button>
      </div>

      <div className="main-container">
        <div className="sidebar">
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search channels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="list-container">
              <ChannelList channels={filteredChannels} onSelect={setSelectedChannel} />
            </div>
        </div>
        <div className="video-container">
          {selectedChannel ? (
            <VideoPlayer url={selectedChannel} />
          ) : (
            <p>Select a channel to watch</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;