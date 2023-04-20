import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Menu from './pages/Menu/Menu';
import Proveedor from './pages/Menu/Componentes/Gestion/Proveedores';
import Usuario from './pages/Menu/Componentes/Gestion/Usuario';
import Gasto from './pages/Menu/Componentes/Gestion/Gastos';
import Formcrearprovee from './pages/Menu/Componentes/Formularios/Crearprovee';
import Formcrearusuario from './pages/Menu/Componentes/Formularios/Crearusuario';
import usuarionoexiste from "./pages/Login/Usuarionoexiste";
import Formactualizarprovee from './pages/Menu/Componentes/Formularios/Actulizarprovee';
import Formcreartipogasto from './pages/Menu/Componentes/Formularios/Creartipogasto';
import Formactualizarusuario from './pages/Menu/Componentes/Formularios/ActualizarUsuario';
import Listarusuario from './pages/Menu/Componentes/Formularios/ListarUsuario';
import Listarproveedor from './pages/Menu/Componentes/Formularios/ListarProveedor';
import Listartipodegastos from './pages/Menu/Componentes/Formularios/Listartipodegastos';

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
          <Route path="/usuarionoexiste" component={usuarionoexiste}/>
          <Route path="/actualizarproveedor" component={Formactualizarprovee}/>
          <Route path="/creartipogasto" component={Formcreartipogasto}/>
          <Route path="/actualizarusuario" component={Formactualizarusuario}/>
          <Route path="/listarusuario" component={Listarusuario}/>
          <Route path="/listarproveedor" component={Listarproveedor}/>
          <Route path="/listargastos" component={Listartipodegastos}/>
        </Switch>
      </Router>
  );
}

export default App;
