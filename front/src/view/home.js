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
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card className="card">
                <Card.Img variant="top" src={estudiante}  className="images"/>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card className="card">
                <Card.Img variant="top" src={laboral} className="images"/>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
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