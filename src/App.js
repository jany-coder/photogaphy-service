import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    
    <Router>
        <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
