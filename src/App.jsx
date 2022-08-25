import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import Form from "./components/Form";
import memeData from "./components/memeData";
import "./App.css";

function App() {
  const [memeImageObject, setMemeImageObject] = React.useState({
    id: "181913649",
    name: "Drake Hotline Bling",
    url: "https://i.imgflip.com/30b1gx.jpg",
    width: 1200,
    height: 1200,
    box_count: 2,
  });

  const getNewImage = function (e) {
    e.preventDefault();

    const randomNumber = Math.floor(Math.random() * 100);

    setMemeImageObject((prevMemeImageObject) => {
      return {
        ...memeData.data.memes[randomNumber],
      };
    });
  };

  return (
    <div className="App">
      <Header memeInfo={memeImageObject} />
      <Meme incomingMeme={memeImageObject} changeMeme={getNewImage} />
      <Form />
    </div>
  );
}

export default App;
