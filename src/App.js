import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home'
import One from './components/One'
import Two from './components/Two'

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <Router>
      <HelmetProvider>
        <>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/one">One</Link>
            </li>
            <li>
              <Link to="/two">Two</Link>
            </li>
          </ul>

          <hr />

          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/one">
              <One />
            </Route>
            <Route path="/two">
              <Two />
            </Route>
          </Switch>
        </>
      </HelmetProvider>        
    </Router>
  );
}

export default App;
