import React from "react";
import "./Meme.css";

/*
   <form className="meme-form">
        <input placeholder="Top-text" className="form-input" type="text" />
        <input placeholder="Bottom-text" className="form-input" type="text" />
        <button onClick={trigger} className="form-btn">
          Get a new meme image
        </button>
    </form>
*/
function Meme() {
  const [siblings, setSiblings] = React.useState(["Abhishek Sharma"]);
  const [count, setCount] = React.useState(0);
  const [inputValue, setInputValue] = React.useState("");

  const increaseCount = function () {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = function () {
    setCount((prevCount) => prevCount - 1);
  };

  const trigger = function (name) {
    console.log("Clicked!");
  };

  const siblingsElements = siblings.map((sibling) => (
    <p key={sibling}>{sibling}</p>
  ));

  const addSiblings = function () {
    let firstName = document.querySelector(".form-input-1").value;
    let lastName = document.querySelector(".form-input-2").value;

    const firstNameCaps =
      firstName[0].toLocaleUpperCase() + firstName.slice(1).toLocaleLowerCase();
    const lastNameCaps =
      lastName[0].toLocaleUpperCase() + lastName.slice(1).toLocaleLowerCase();

    setSiblings((prevSibling) => [
      ...prevSibling,
      `${firstNameCaps} ${lastNameCaps}`,
    ]);

    document.querySelector(".form-input").innerHTML = "";
    console.log(`${firstNameCaps} ${lastNameCaps}`);
  };

  return (
    <main>
      {siblingsElements}

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
        <button onClick={addSiblings} className="form-btn">
          Get a new meme image
        </button>
      </div>
    </main>
  );
}

export default Meme;
