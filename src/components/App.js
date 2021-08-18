import React from "react";
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Gallery from "./Gallery";
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path='/' component={Gallery} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />

            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route component={() => <div>404 Not found</div>} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
