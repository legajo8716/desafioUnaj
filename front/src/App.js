import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioAlumno from './component/formularioAlumno';
import FormularioEmpresa from './component/formularioEmpresa';
import AprobacionSolicitudes from './component/aprobacionSolicitudes';
import SolicitudesAlumnosView from './view/solicitudesAlumnosView';

import ListaOfertas from './component/listaDeOfertas';
import LoginView from './view/loginView';
import RegisterView from './view/registerView';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './view/home';
import FormularioView from './view/FormularioView';

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
          <Route path="/login" component={LoginView} />
           <Route path="/lista" component={ListaOfertas } lista={data} />
           <Route path="/formulario/alumno" render={() => <FormularioView lista="alumno"/>} />
           <Route path="/formulario/empresa" render={() => <FormularioView lista="empresa"/>} />
           <Route path="/registro" component={RegisterView }  />

           <Route path="/solicitudes/Alumnos" component={SolicitudesAlumnosView }  />



        </Switch>
        </BrowserRouter>
  );
}

export default App;
