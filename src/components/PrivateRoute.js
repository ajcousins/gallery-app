import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  // Ternary redirects too quickly. Should wait until currentUser check is complete before rendering.
  // currentUser is initially set to "loading", before being set to user object or null by auth.onAuthStateChanged.

  return (
    <div>
      {currentUser !== "loading" ? (
        <Route
          {...rest}
          render={(props) => {
            return currentUser ? (
              <Component {...props} />
            ) : (
              <Redirect to='/login' />
            );
          }}
        ></Route>
      ) : null}
    </div>
  );
}
