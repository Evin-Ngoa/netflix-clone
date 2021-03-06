import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, SignIn, SignUp, Browse }  from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import * as ROUTES from './constants/routes';

export default function App() {
   // Can get user details if logged in
   const user = useAuthListener();

    return (
         <Router>
            <Switch>
               <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                  <SignIn />
               </IsUserRedirect>
               <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                  <SignUp />
               </IsUserRedirect>
               <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                  <Browse />
               </ProtectedRoute>
               <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                  <Home />
               </IsUserRedirect>
            </Switch>
         </Router>
    );
}