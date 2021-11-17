import React from "react";

const Playlist = () => {
  const playlists = [
    {
      id: 1,
      name: "Brenna MacCrimmon Radio",
    },
    {
      id: 2,
      name: "Orange",
    },
    {
      id: 3,
      name: "Claret",
    },
    {
      id: 4,
      name: "Is This Love",
    },
    {
      id: 5,
      name: "NKVT",
    },
    {
      id: 6,
      name: "Brenna MacCrimmon Radio",
    },
    {
      id: 1,
      name: "Brenna MacCrimmon Radio",
    },
    {
      id: 2,
      name: "Orange",
    },
    {
      id: 3,
      name: "Claret",
    },
    {
      id: 4,
      name: "Is This Love",
    },
    {
      id: 5,
      name: "NKVT",
    },
    {
      id: 6,
      name: "Brenna MacCrimmon Radio",
    },
    {
      id: 1,
      name: "Brenna MacCrimmon Radio",
    },
    {
      id: 2,
      name: "Orange",
    },
    {
      id: 3,
      name: "Claret",
    },
    {
      id: 4,
      name: "Is This Love",
    },
    {
      id: 5,
      name: "NKVT",
    },
    {
      id: 6,
      name: "Brenna MacCrimmon Radio",
    },
    {
      id: 1,
      name: "Brenna MacCrimmon Radio",
    },
    {
      id: 2,
      name: "Orange",
    },
    {
      id: 3,
      name: "Claret",
    },
    {
      id: 4,
      name: "Is This Love",
    },
    {
      id: 5,
      name: "NKVT",
    },
    {
      id: 6,
      name: "Brenna MacCrimmon Radio",
    },
  ];

  return (
    <div className="playlists">
      <ul>
        {playlists.map((playlist) => {
          return <li className="playlist-item">{playlist.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Playlist;
