import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioAlumno from './component/formularioAlumno';
import FormularioEmpresa from './component/formularioEmpresa';
import ListaDeAlumnosView from './view/listaDeAlumnosView';
import ListaDeOfertasView from './view/listaOfertasLaboralesView';
import AprobacionSolicitudesView from './view/aprobacionSolicitudesView';
import Lista from './component/lista'
import LoginView from './view/loginView';
import RegisterView from './view/registerView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeView from './view/homeView';
import FormularioView from './view/FormularioView';
import{Form,Button,Col} from 'react-bootstrap'
import $ from 'jquery';
import Popper from 'popper.js';

function App() {
  var data={"nombre":"nelson","apellido":"gonzalez" }
  return (
    <BrowserRouter>
     <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/formularioAlumno" component={FormularioAlumno} />
          <Route path="/formularioEmpresa" component={FormularioEmpresa} />
          <Route path="/login" component={LoginView} />
           <Route path="/formulario/alumno" render={() => <FormularioView lista="alumno"/>} />
           <Route path="/formulario/empresa" render={() => <FormularioView lista="empresa"/>} />
           <Route path="/registro" component={RegisterView }  />
           <Route path="/solicitudes/Alumnos" component={ListaDeAlumnosView }  />
           <Route path="/solicitudes/Ofertas" component={ListaDeOfertasView }  />
           <Route path="/aprobacion/solicitudes" component={AprobacionSolicitudesView }  />


        </Switch>
        </BrowserRouter>
  );
}

export default App;
