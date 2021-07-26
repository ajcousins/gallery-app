import React, { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const { signup } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    signup(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <div>
      <div className='small-container'>
        <h2>Sign Up</h2>
        <form className='user-form'>
          <label for='email'>Email:</label>
          <input type='email' id='email' ref={emailRef} required />

          <label for='password'>Password:</label>
          <input type='password' id='password' ref={passwordRef} required />

          <label for='confirm'>Confirm Password:</label>
          <input type='password' id='confirm' ref={confirmRef} required />

          <button className='user-form__btn' type='submit'>
            Sign Up
          </button>
        </form>
        <div>Already have an account?</div>
        <div>Log In</div>
      </div>
    </div>
  );
}
