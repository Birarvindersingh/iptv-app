<div align="left" style="position: relative;">
<img src="https://raw.githubusercontent.com/Birarvindersingh/iptv-app/91895ee562a071531501fdeb9019615d9895eb1f/public/iptv.svg" align="right" width="30%" style="margin: -20px 0 0 20px;">
<h1>IPTV-App</h1>
<p align="left">
</p>
<p align="left">
	<img src="https://img.shields.io/github/last-commit/Birarvindersingh/iptv-app?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Birarvindersingh/iptv-app?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Birarvindersingh/iptv-app?style=default&color=0080ff" alt="repo-language-count">
</p>
<br><br><br><br><br><br>
</div>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)

---

##  Overview

The `iptv-app` repository provides a foundational structure for building an IPTV (Internet Protocol Television) application. This project focuses on the core functionality of parsing M3U playlists and rendering live TV streams within a web browser environment.

---

##  Features

* M3U Playlist Parsing: The application is designed to interpret and process M3U playlist files, which are commonly used to define lists of media streams.
* Channel Listing: It extracts channel names and stream URLs from the M3U playlist, presenting them in a user-friendly list.
* Live Stream Playback: Upon user selection, the application initiates playback of the chosen live stream using the browser's native video capabilities or embedded media players.
* Basic User Interface: A simple and intuitive interface allows users to input M3U playlist URLs and select channels for viewing.
* Client-Side Implementation (Primarily): The project leans towards client-side implementation, making it accessible through web browsers without requiring extensive server-side infrastructure for basic operation.

---

##  Project Structure

```sh
└── iptv-app/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── iptv.svg
    │   └── vite.svg
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── assets
    │   ├── components
    │   ├── index.css
    │   ├── main.jsx
    │   └── utils
    └── vite.config.js
```

---
##  Getting Started

###  Prerequisites

Before getting started with iptv-app, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm


###  Installation

Install iptv-app using one of the following methods:

**Build from source:**

1. Clone the iptv-app repository:
```sh
❯ git clone https://github.com/Birarvindersingh/iptv-app
```

2. Navigate to the project directory:
```sh
❯ cd iptv-app
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run iptv-app using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```

---

## Disclaimer

IPTV-App does not provide any playlists or other digital content.

---
