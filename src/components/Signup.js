import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  // const formRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(formRef);
    console.log("passwordRef", passwordRef);
    console.log("passwordRef.current", passwordRef.current);
    console.log("passwordRef.current.value", passwordRef.current.value);

    if (passwordRef.current.value !== confirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div>
      <div className='small-container'>
        <div className='back-of-house-background' />
        <h2>Sign Up</h2>
        <form className='user-form' onSubmit={handleSubmit}>
          {error && <div className='error-msg'>{error}</div>}
          <label for='email'>Email</label>
          <input
            type='email'
            id='email'
            ref={emailRef}
            required
            style={{ marginBottom: "1em" }}
          />

          <label for='password'>Password</label>
          <input
            type='password'
            id='password'
            ref={passwordRef}
            required
            style={{ marginBottom: "1em" }}
          />

          <label for='confirm'>Confirm Password</label>
          <input type='password' id='confirm' ref={confirmRef} required />

          <button
            className='user-form__btn'
            type='submit'
            disabled={loading}
            style={{ marginTop: "1em" }}
          >
            Sign Up
          </button>
        </form>
        <div>Already have an account?</div>
        <Link to='/login'>Log In</Link>
      </div>
    </div>
  );
}
