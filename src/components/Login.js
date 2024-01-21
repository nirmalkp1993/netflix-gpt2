import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateEmailAndPassword } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const togalSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleSubmit = () => {
    const error = validateEmailAndPassword(
      email.current.value,
      password.current.value
    );
    setErrorMessage(error);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg"
          alt="login"
        ></img>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute p-12 opacity-80 bg-black w-3/12 my-36 mx-auto rounded-lg right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            name="netflix_email"
            placeholder="Full Name"
            className="p-2 m-2 bg-gray-700  w-full"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          name="netflix_email"
          placeholder="Enter Email"
          className="p-2 m-2 bg-gray-700  w-full"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-2 m-2 w-full bg-gray-700"
        ></input>
        <p className="font-bold text-red-600 text-lg py-2">{errorMessage}</p>
        <button
          className="p-3 m-2 w-full bg-red-700 rounded-lg"
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2" onClick={togalSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up Now"
            : "Already register ? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
