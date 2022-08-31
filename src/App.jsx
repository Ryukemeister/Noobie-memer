import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      <Form />
    </div>
  );
}

export default App;
