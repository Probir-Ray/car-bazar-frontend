import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore/Explore';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <PrivateRoute path="/explore">
                <Explore/>
              </PrivateRoute>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/register">
                <Register/>
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard/>
              </PrivateRoute>
              <PrivateRoute path="/purchase/:purchaseId">
                <Purchase/>
              </PrivateRoute>
            </Switch>
        </Router>        
      </AuthProvider>
    </div>
  );
}

export default App;
