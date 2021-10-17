import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Prot 
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        // If there is no user return login component children
        // returns { user : null } if empty
        // if (!user) {
        if (user.user === null) {
          return children;
        }

        // if (user) {
        if (user.user !== null) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}


// Protect Auth Routes
export function ProtectedRoute({ user, children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) => {
            //   If there is user then already loggedin therefore can access children componenets
            // if (user) {
            if (user.user !== null) {
                return children;
            }
            
            // else redirect to login
            // if (!user) {
            if (user.user === null) {
                return (
                    <Redirect
                        to={{
                            pathname: 'signin',
                            state: { from: location },
                        }}
                    />
                );
            }
  
            return null;
        }}
      />
    );
  }
  