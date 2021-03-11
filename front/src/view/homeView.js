import React from 'react'
import{Form,Button,Col,Navbar,Nav,FormControl,Card,CardGroup} from 'react-bootstrap'
import apiGeo from '../api/apiGeo.js'
import axios from 'axios';
import empresa from './imagenes/empresa.jpg'
import estudiante from './imagenes/estudiante.jpg'
import laboral from './imagenes/laboral.jpg'
import oferta from './imagenes/oferta.jpg'
import busquedaEstudiante from './imagenes/busquedaEstudiante.jpg'
import Navar from'../component/navar'

import './home.css'
export default class HomeView extends React.Component{
render(){ return(
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

            <CardGroup>
              <Card className="card" onClick={()=>this.props.history.push("/formulario/empresa")}>
                <Card.Img variant="top" src={empresa} className="images"/>
                <Card.Body>
                  <Card.Title>¿Tu empresa necesita pesonal?</Card.Title>
                  <Card.Text>
                       En esta seccion usted podra inscribir a su empresa y ofreces todos los puestos a cubrir de la misma.
                       Esta es una forma facil de conseguir personal calificado para todas sus labores y hacer crecer su empresa.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="card" onClick={()=>this.props.history.push("/formulario/alumno")}>
                <Card.Img variant="top" src={estudiante}  className="images"/>
                <Card.Body>
                  <Card.Title>¿Sos estudiante y necesitas trabajo?</Card.Title>
                  <Card.Text>
                    La forma mas facil de ingresar a la industria. ¿Estas dispuesto a recibir la oferta de tu vida?.
                    ¡Inscribite!
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="card" onClick={()=>this.props.history.push("/login")}>
                <Card.Img variant="top" src={laboral} className="images"/>
                <Card.Body>
                  <Card.Title>Personal Administrativo</Card.Title>
                  <Card.Text>
                    Todas las inscripciones son finamente seleccionadas, nuestro personal aprueban o rechazan las inscripciones, para ofrecer los mejores empleadores y empleados.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
               <Card onClick={()=>this.props.history.push("/solicitudes/Alumnos")} >
                          <Card.Header>Featured</Card.Header>
                          <Card.Body>
                            <Card.Title>Estudiantes para contratar</Card.Title>
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