import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  // const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <div>
      <div className='back-of-house-background' />
      <div className='small-container'>
        <h2>Log In</h2>
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

          <button
            className='user-form__btn'
            type='submit'
            disabled={loading}
            style={{ marginTop: "1em" }}
          >
            Log In
          </button>
        </form>

        <Link to='/signup'>Sign Up</Link>
      </div>
    </div>
  );
}
