import React from "react";
import "./Form.css";

export default function Form() {
  const [formInput, setFormInput] = React.useState({
    email: "",
    password: "",
    checkPassword: "",
    toJoin: false,
  });
  // console.log(formInput);

  function handleClick(event) {
    const { name, value, checked, type } = event.target;
    setFormInput((prevFormInput) => {
      return {
        ...prevFormInput,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      formInput.toJoin &&
      formInput.password === formInput.checkPassword &&
      formInput.password.length >= 1
    ) {
      setFormInput({
        email: "",
        password: "",
        checkPassword: "",
        toJoin: false,
      });
      alert(
        "Successfully signed up, thanks for signing up for our newsletter!"
      );
    } else {
      alert(
        "Not able to sign in, passwords do not match. Please check your passwords once agin."
      );
    }
  }

  return (
    <div className="form-container">
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          placeholder="Email address"
          type="email"
          name="email"
          value={formInput.email}
          onChange={handleClick}
          className="form-input-name"
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={formInput.password}
          onChange={handleClick}
          className="form-input-name"
        />
        <input
          placeholder="Confirm password"
          type="password"
          name="checkPassword"
          value={formInput.checkPassword}
          onChange={handleClick}
          className="form-input-name"
        />
        <div className="form-marketing">
          <input
            name="toJoin"
            checked={formInput.toJoin}
            id="okayToEmail"
            type="checkbox"
            onChange={handleClick}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form-submit">Sign up</button>
      </form>
    </div>
  );
}
