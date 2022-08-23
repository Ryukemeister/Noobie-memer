import React from "react";
import "./Header.css";

function Header({ memeInfo }) {
  return (
    <nav className="nav">
      <h3 className="meme-id">Meme id: {memeInfo.id}</h3>
      <img className="troll-face" src="./src/assets/Troll Face.png" alt="" />
      <h3 className="nav-title">Meme Generator</h3>
      <h4 className="nav-description ">React Course - Project 3</h4>
    </nav>
  );
}

export default Header;
