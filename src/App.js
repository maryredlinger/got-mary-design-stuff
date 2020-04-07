import React from 'react';
import Home from './pages/Home.js'
import Apparel from './pages/Apparel.js'
import Books from './pages/Books.js'
import TinySaints from './pages/TinySaints.js'
import Hats from './pages/Hats.js'
import Heavenly from './pages/Heavenly.js'





import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Got Mary?</a>

              <a  className="nav-link" href="#shop">Shop</a>
              <a className="nav-link" href="#">Contact</a>
              <a className="nav-link" href="#">About</a>
      </nav>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />  
          <Route path="/apparel" exact component={Apparel} />
          <Route path="/tiny-saints" exact component={TinySaints} />
          <Route path="/books" exact component={Books} />
          <Route path="/hats" exact component={Hats} />  
          <Route path="/heavenly" exact component={Heavenly} />  
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
