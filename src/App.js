import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Menu from './pages/Menu/Menu';


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/http://localhost:3000" component={Login}/>
          <Route path="/menu" component={Menu}/>
        </Switch>
      </Router>
  );
}

export default App;
