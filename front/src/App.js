import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioAlumno from './component/formularioAlumno';
import FormularioEmpresa from './component/formularioEmpresa';
import AprobacionSolicitudes from './component/aprobacionSolicitudes';
import ListaOfertas from './component/listaDeOfertas';
import Login from './view/login';
import Register from './view/register';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './view/home';

import{Form,Button,Col} from 'react-bootstrap'
import $ from 'jquery';
import Popper from 'popper.js';

function App() {
  var data=[{descripcion:"pillo",fechaInicio:"hoy",fechaFinalizacion:"mañana"}]
  return (
    <BrowserRouter>
     <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/formularioAlumno" component={FormularioAlumno} />
          <Route path="/formularioEmpresa" component={FormularioEmpresa} />
          <Route path="/registro" component={Register} />
          <Route path="/login" component={Login} />


        </Switch>
        </BrowserRouter>
  );
}

export default App;
