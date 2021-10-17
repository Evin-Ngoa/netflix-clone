Commands
> `npx create-react-app netflix-clone`
> `npx kill-port 3000 8080 4200` // Kill ports command 

Basic Route Implementation
- Means all pages inside the Route wil be under that route sign-in
`
  <Router>
        <Route exact path="/sign-in">
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </Route>
</Router>
`

import { useHistory } from 'react-router-dom';
enables history.push

// Firebase
Enable Login
> Authentication
> Get Started 
> Enable email/password 

### Login User Details
netflixclone.user@gmail.com
12345678

### import and exports
> Export with default will require import as 
export default function Auth() 

import App from './app';

> Export without default will require import as

export function Auth() 

import { App } from './app';

> If you add an index.js having all exports
then can be imported as 
import { App } from './app'; format

