import React, { useState, useRef } from "react";
import "./App.css";

const songs = [
  {
    title: "Dreamy Sky",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    bg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    title: "Sunset Ride",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    bg: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b",
  },
  {
    title: "Chill Beats",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    bg: "https://images.unsplash.com/photo-1485579149621-3123dd979885",
  },
  {
    title: "Ocean Breeze",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Starry Night",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    bg: "https://images.unsplash.com/photo-1503264116251-35a269479413",
  },
  {
    title: "Peaceful Mind",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    bg: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  },
  {
    title: "Morning Vibes",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    bg: "https://images.unsplash.com/photo-1516841273335-e39b3788812c",
  },
  {
    title: "Rainy Mood",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    bg: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  },
  {
    title: "Zen Flow",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    bg: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
  },
  {
    title: "Ocean Breeze",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Starry Night",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    bg: "https://images.unsplash.com/photo-1503264116251-35a269479413",
  },
  {
    title: "Peaceful Mind",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    bg: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  },
  {
    title: "Morning Vibes",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    bg: "https://images.unsplash.com/photo-1516841273335-e39b3788812c",
  },
  {
    title: "Rainy Mood",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    bg: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  },
  {
    title: "Zen Flow",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    bg: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
  },
];

function App() {
  const [currentSrc, setCurrentSrc] = useState(null);
  const audioRef = useRef(null);

  const playSong = (src) => {
    setCurrentSrc(src);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  return (
    <div className="app">
      <h1>🎧 Music Player</h1>
      <div className="song-list">
        {songs.map((song, index) => (
          <div
            className="song-card"
            key={index}
            onClick={() => playSong(song.src)}
            style={{
              backgroundImage: `url(${song.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              textShadow: "1px 1px 5px black",
            }}
          >
            <h3>{song.title}</h3>
            <p>▶️ Tap to play</p>
          </div>
        ))}
      </div>
      <audio ref={audioRef} controls>
        <source src={currentSrc} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default App;
