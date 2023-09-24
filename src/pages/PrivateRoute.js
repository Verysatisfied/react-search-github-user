import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0(); // Use the useAuth0 hook to check if the user is authenticated
  const isUser = isAuthenticated && user;
  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated ? children : <Redirect to="/login" />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
