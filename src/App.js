import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import '@fontsource/roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import ServiceDetails from './components/ServiceDeails/ServiceDetails';
import Admin from './components/Admin/Admin';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddPackage from './components/AddPackage/AddPackage';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/serviceDetails/:id">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/login">
           <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard/:id">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/addPackage">
            <AddPackage></AddPackage>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
