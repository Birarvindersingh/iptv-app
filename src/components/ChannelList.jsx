import React from "react";

const ChannelList = ({ channels, onSelect }) => {
  return (
    <div className="channel-list">
      {channels.length > 0 ? (
        channels.map((channel) => (
          <div key={channel.id} className="channel-item" onClick={() => onSelect(channel.url)}>
            {channel.name}
          </div>
        ))
      ) : (
        <p className="no-channels">No channels available</p>
      )}
    </div>
  );
};

export default ChannelList;