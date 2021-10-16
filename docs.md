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