import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore/Explore';
import Purchase from './Pages/Purchase/Purchase';


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore/>
            </Route>
            <Route path="/purchase/:purchaseId">
              <Purchase></Purchase>
            </Route>
          </Switch>
      </Router>      
    </div>
  );
}

export default App;
