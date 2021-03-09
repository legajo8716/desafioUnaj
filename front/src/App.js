import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioAlumno from './component/formularioAlumno';
import FormularioEmpresa from './component/formularioEmpresa';
import AprobacionSolicitudes from './component/aprobacionSolicitudes';
import ListaOfertas from './component/listaDeOfertas';

import Home from './view/home';

import{Form,Button,Col} from 'react-bootstrap'
import $ from 'jquery';
import Popper from 'popper.js';

function App() {
  var data=[{descripcion:"pillo",fechaInicio:"hoy",fechaFinalizacion:"mañana"}]
  return (
    <div >
     <FormularioEmpresa/>
    </div>
  );
}

export default App;
