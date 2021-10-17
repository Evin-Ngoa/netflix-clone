import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Home, SignIn, SignUp, Browse }  from './pages';
import { IsUserRedirect } from './helpers/routes';
import * as ROUTES from './constants/routes';

export default function App() {
   const user = {};

    return (
        <Router>
             <Route exact path={ROUTES.HOME}>
                <Home/>
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
                <Browse/>
             </Route>
        </Router>
    );
}