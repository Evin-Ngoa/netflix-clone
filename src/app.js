import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Home, SignIn, SignUp, Browse }  from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import * as ROUTES from './constants/routes';

export default function App() {
   // Can get user details if logged in
   const user = useAuthListener();

    return (
        <Router>
             <Route exact path={ROUTES.HOME}>

                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                  <Home/>
               </IsUserRedirect>
             </Route>
             <Route exact path={ROUTES.SIGN_IN}>
                {/* Check if use is loggedin */}
               <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                  <SignIn />
               </IsUserRedirect>
             </Route>
             <Route exact path={ROUTES.SIGN_UP}>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                  <SignUp/>
               </IsUserRedirect>
             </Route>
             <Route exact path={ROUTES.BROWSE}>
                <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                  <Browse />
               </ProtectedRoute>
             </Route>
        </Router>
    );
}