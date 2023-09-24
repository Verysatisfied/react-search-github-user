import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" exact>
            {/* Render the Dashboard component here */}
            <Dashboard />
          </PrivateRoute>
          <Redirect to="/login" />
          {/* Redirect unauthenticated users to the login page */}
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
