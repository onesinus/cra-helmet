import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home'
import One from './components/One'
import Two from './components/Two'

function App() {
  return (
    <Router>
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
          <Route path="/home">
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
    </Router>
  );
}

export default App;
