import React from 'react'
import{Form,Button,Col,Navbar,Nav,FormControl,Card,CardGroup} from 'react-bootstrap'
import apiGeo from '../api/apiGeo.js'
import axios from 'axios';
import empresa from './empresa.jpg'
import estudiante from './estudiante.jpg'
import laboral from './laboral.jpg'
import oferta from './oferta.jpg'
import busquedaEstudiante from './busquedaEstudiante.jpg'
import logo from './logo.png'

import './home.css'
export default class Home extends React.Component{
render(){ return(
        <div>

          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
                                                 <img
                                                   src={logo}
                                                   width="100"
                                                   height="50"
                                                   className="d-inline-block align-top"
                                                   alt="React Bootstrap logo"
                                                 />
                                               </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Ofertas Laborales</Nav.Link>
              <Nav.Link href="#pricing">Encuentre personal</Nav.Link>
              <Nav.Link href="#pricing">Contacto</Nav.Link>

            </Nav>

          </Navbar>



            <Card >

              <Card.Body>
                <Card.Title>Ofertas laborales</Card.Title>
                <Card.Img variant="top" src={oferta} />


                <Button variant="secondary" size="lg" block>
                    Encuentre su proximo trabajo
                 </Button>
              </Card.Body>
            </Card>

            <CardGroup>
              <Card className="card">
                <Card.Img variant="top" src={empresa} className="images"/>
                <Card.Body>
                  <Card.Title>¿Tu empresa necesita pesonal?</Card.Title>
                  <Card.Text>
                       En esta seccion usted podra inscribir a su empresa y ofreces todos los puestos a cubrir de la misma.
                       Esta es una forma facil de conseguir personal calificado para todas sus labores y hacer crecer su empresa.
                  </Card.Text>
                </Card.Body>

              </Card>
              <Card className="card">
                <Card.Img variant="top" src={estudiante}  className="images"/>
                <Card.Body>
                  <Card.Title>¿Sos estudiante y necesitas trabajo?</Card.Title>
                  <Card.Text>
                    La forma mas facil de ingresar a la industria. ¿Estas dispuesto a recibir la oferta de tu vida?.
                    ¡Inscribite!

                  </Card.Text>
                </Card.Body>

              </Card>
              <Card className="card">
                <Card.Img variant="top" src={laboral} className="images"/>
                <Card.Body>
                  <Card.Title>Personal Administrativo</Card.Title>
                  <Card.Text>
                    Todas las inscripciones son finamente seleccionadas, nuestro personal aprueban o rechazan las inscripciones, para ofrecer los mejores empleadores y empleados.


                  </Card.Text>
                </Card.Body>

              </Card>
            </CardGroup>
               <Card >
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