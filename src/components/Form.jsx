import React from "react";
import "./Form.css";

export default function Form() {
  const [formInput, setFormInput] = React.useState({
    email: "",
    password: "",
    checkPassword: "",
    toJoin: false,
  });

  function handleChange(e) {
    // console.log(e);
    // document.querySelector(".input-from-form").innerHTML = e.target.value;
    setFormInput((prevFormInput) => {
      const { name, type, value, checked } = e.target;
      return {
        ...prevFormInput,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formInput);
    formInput.password === formInput.checkPassword &&
    formInput.password.length >= 1 &&
    formInput.toJoin
      ? alert(
          "Successfully signed up, thanks for signing up for our newsletter!"
        )
      : alert(
          "Not able to sign up, passwords do not match. Please check your passwords once again."
        );
  }

  return (
    <div className="form-container">
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          className="form-input-name"
          placeholder="Email address"
          type="email"
          name="email"
          onChange={handleChange}
          value={formInput.email}
        />
        <input
          className="form-input-name"
          placeholder="Password"
          type="password"
          value={formInput.password}
          name="password"
          onChange={handleChange}
        />
        <input
          className="form-input-name"
          placeholder="Confirm password"
          type="password"
          name="checkPassword"
          value={formInput.checkPassword}
          onChange={handleChange}
        />
        <div className="form-marketing">
          <input
            onChange={handleChange}
            name="toJoin"
            checked={formInput.toJoin}
            id="okayToEmail"
            type="checkbox"
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
