import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Menu from './pages/Menu/Menu';
import Proveedor from './pages/Menu/Componentes/Gestion/Proveedores';


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/proveedor" component={Proveedor}/>
        </Switch>
      </Router>
  );
}

export default App;
