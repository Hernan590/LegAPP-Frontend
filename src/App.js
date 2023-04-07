import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Menu from './pages/Menu/Menu';
import Proveedor from './pages/Menu/Componentes/Gestion/Proveedores';
import Usuario from './pages/Menu/Componentes/Gestion/Usuario';
import Gasto from './pages/Menu/Componentes/Gestion/Gastos';
import Formcrearprovee from './pages/Menu/Componentes/Formularios/Crearprovee';
import Formcrearusuario from './pages/Menu/Componentes/Formularios/Crearusuario';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/proveedor" component={Proveedor}/>
          <Route path="/usuario" component={Usuario}/>
          <Route path="/gasto" component={Gasto}/>
          <Route path="/crearproveedor" component={Formcrearprovee}/>
          <Route path="/crearusuario" component={Formcrearusuario}/>
        </Switch>
      </Router>
  );
}

export default App;
