import React from "react";
// import memeData from "./memeData";
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

function Meme({ incomingMeme, changeMeme }) {
  /*
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

  // console.table(memeImageObject);

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
*/

  const [memeText, setMemetext] = React.useState({
    topText: "",
    bottomText: "",
  });

  function handleChange(e) {
    setMemetext((prevMemeText) => {
      return { ...prevMemeText, [e.target.name]: e.target.value };
    });
  }

  return (
    <div>
      <form className="meme-form">
        <label htmlFor="checkOne">Are you friendly?</label>
        <input type="checkbox" id="checkOne" onChange={handleChange} />
        <input
          placeholder="Top-text"
          className="form-input form-input-1"
          type="text"
          name="topText"
          onChange={handleChange}
          value={memeText.topText}
        />
        <input
          placeholder="Bottom-text"
          className="form-input form-input-2"
          type="text"
          name="bottomText"
          onChange={handleChange}
          value={memeText.bottomText}
        />
        <button onClick={changeMeme} className="form-btn">
          Get a new meme image
        </button>
      </form>
      <div
        className="background-img"
        style={{
          backgroundImage: `url(${incomingMeme.url})`,
        }}
      >
        <h1 className="top-text">{memeText.topText}</h1>
        <h1 className="bottom-text">{memeText.bottomText}</h1>
      </div>
      <div className="img">
        <img
          className="meme-img"
          src={incomingMeme.url}
          alt="actual-meme-image"
        />
      </div>
    </div>
  );
}

export default Meme;
