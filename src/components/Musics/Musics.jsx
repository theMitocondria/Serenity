import React, { useState } from "react";
import "./Musics.css";
import Card from "./card.jsx";
import Navbar from "../navbar/navbar";
import { Data } from "./Data.js";

const Musics = () => {

  const [songs, setsongs] = useState(Data);

  const filterSongs = (lang) => {
    const newsongs = Data.filter((song) => {
      return song.language === `${lang}`
    })
    setsongs(newsongs)
  }


  return (
    <div className="slightright">
      <Navbar />
      <p className="music-title">The Playlist</p>
      <div className="filterSong">
        <button className="music-btn" onClick={()=>{setsongs(Data)}}>All</button>
        <button className="music-btn" onClick={() => {filterSongs("English")}}>English</button>
        <button className="music-btn" onClick={() => (filterSongs("Hindi"))}>Hindi</button>
        <button className="music-btn" onClick={() => (filterSongs("Haryanvi"))}>Haryanvi</button>
        <button className="music-btn" onClick={() => (filterSongs("Punjabi"))}>Punjabi</button>
      </div>
      <div className="songcard">
        {songs.map((item, index) => {
          return (
            <Card
              key={index}
              id={item.id}
              language={item.language}
              name={item.name}
              link={item.link}
              posterLink={item.posterLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Musics;
