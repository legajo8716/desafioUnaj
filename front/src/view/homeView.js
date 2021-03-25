import React from 'react'
import{Form,Button,Col,Navbar,Nav,FormControl,Card,CardGroup} from 'react-bootstrap'
import axios from 'axios';
import empresa from './imagenes/empresa.jpg'
import estudiante from './imagenes/estudiante.jpg'
import laboral from './imagenes/laboral.jpg'
import oferta from './imagenes/oferta.jpg'
import busquedaEstudiante from './imagenes/busquedaEstudiante.jpg'
import Navar from'../component/navar'
import CardHome from '../component/Card'
import './css/home.css'

export default class HomeView extends React.Component{



render(){
 const textoAlumno=  "La forma mas facil de ingresar a la industria. ¿Estas dispuesto a recibir la oferta de tu vida?. ¡Inscribite!"
 const textoEmpresa=  "      En esta seccion usted podra inscribir a su empresa y ofreces todos los puestos a cubrir de la misma. Esta es una forma facil de conseguir personal calificado para todas sus labores y hacer crecer su empresa."
 const textoAdmin=  "Todas las inscripciones son finamente seleccionadas, nuestro personal aprueban o rechazan las inscripciones, para ofrecer los mejores empleadores y empleados."
 const tituloAlumno="¿Sos estudiante y necesitas trabajo?"
 const tituloEmpresa="¿Tu empresa necesita pesonal?"
 const tituloAdmin="Personal Administrativo"
 return(
        <div>
            <Navar/>
            <Card onClick={()=>this.props.history.push("/solicitudes/Ofertas")}>
              <Card.Body>
                <Card.Title>Ofertas laborales</Card.Title>
                <Card.Img variant="top" src={oferta} />
                <Button variant="secondary" size="lg" block>
                    Encuentre su proximo trabajo
                </Button>
              </Card.Body>
            </Card>
            <cardPrincipal titulo="Ofertas laborales" nombreBoton="Encuentre su proximo trabajo" imagen={oferta}/>
           <CardGroup>
              <CardHome  titulo={tituloEmpresa} imagen={empresa} texto={textoEmpresa} history={this.props.history} url={"/formulario/empresa"}   /  >
              <CardHome   titulo={tituloAlumno} imagen={estudiante} texto={textoAlumno}  history={this.props.history} url={"/formulario/alumno"}    /  >
              <CardHome   titulo={tituloAdmin} imagen={laboral} texto={textoAlumno} history={this.props.history}  url={"/login"}   /  >
            </CardGroup>
               <Card onClick={()=>this.props.history.push("/solicitudes/Alumnos")} >
                          <Card.Body>
                            <Card.Title>{this.props.titulo}</Card.Title>
                            <Card.Img variant="top" src={busquedaEstudiante} />
                            <Button variant="secondary" size="lg" block>
                                 Ingrese para ver los alumnos que estan abiertos a ofertas laborales.
                            </Button>
                          </Card.Body>
                        </Card>
        </div>
)
}
}