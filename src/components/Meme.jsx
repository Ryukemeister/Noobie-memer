import React from "react";
import memeData from "./memeData";
import "./Meme.css";

/*
   <form className="meme-form">
        <input placeholder="Top-text" className="form-input" type="text" />
        <input placeholder="Bottom-text" className="form-input" type="text" />
        <button onClick={trigger} className="form-btn">
          Get a new meme image
        </button>
    </form>

     ...memeData.data.memes[randomNumber],
*/

function Meme() {
  const [inputValue, setInputValue] = React.useState("");
  const [memeImage, setMemeImage] = React.useState(
    "https://i.imgflip.com/30b1gx.jpg"
  );
  const [memeImageObject, setMemeImageObject] = React.useState({
    id: "181913649",
    name: "Drake Hotline Bling",
    url: "https://i.imgflip.com/30b1gx.jpg",
    width: 1200,
    height: 1200,
    box_count: 2,
  });

  console.table(memeImageObject);

  const getNewImage = function () {
    const randomNumber = Math.floor(Math.random() * 100);
    const url = memeData.data.memes[randomNumber].url;

    setMemeImage(url);

    setMemeImageObject((prevMemeImageObject) => {
      return {
        ...memeData.data.memes[randomNumber],
      };
    });
  };

  const trigger = function (name) {
    console.log("Clicked!");
  };

  return (
    <main>
      <div className="meme-form">
        <input
          placeholder="Top-text"
          className="form-input form-input-1"
          type="text"
        />
        <input
          placeholder="Bottom-text"
          className="form-input form-input-2"
          type="text"
        />
        <button onClick={getNewImage} className="form-btn">
          Get a new meme image
        </button>
      </div>
      <div className="img">
        <img className="meme-img" src={memeImage} alt="actual-meme-image" />
      </div>
    </main>
  );
}

export default Meme;
