import React from "react";
import "./Meme.css";

function Meme() {
  const [memesArray, setMemesArray] = React.useState({});
  const [memeText, setMemetext] = React.useState({
    topText: "",
    bottomText: "",
    url: "https://i.imgflip.com/30b1gx.jpg",
  });

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setMemesArray(data.data.memes);
    }
    getMemes();
  }, []);

  function handleClick(e) {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 100);
    const randomUrl = memesArray[randomNumber].url;

    setMemetext((prevMemetext) => ({
      ...prevMemetext,
      url: randomUrl,
    }));
  }

  function handleChange(e) {
    e.preventDefault();
    setMemetext((prevMemeText) => {
      const { name, value } = e.target;
      return { ...prevMemeText, [name]: value };
    });
  }

  return (
    <div>
      <form className="meme-form">
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
        <button onClick={handleClick} className="form-btn">
          Get a new meme image
        </button>
      </form>
      <div
        className="background-img"
        style={{
          backgroundImage: `url(${memeText.url})`,
        }}
      >
        <h1 className="top-text">{memeText.topText}</h1>
        <h1 className="bottom-text">{memeText.bottomText}</h1>
      </div>
      <div className="img">
        <img className="meme-img" src={memeText.url} alt="actual-meme-image" />
      </div>
    </div>
  );
}

export default Meme;
