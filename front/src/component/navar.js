import React from 'react'
import{Form,Button,Col,Navbar,Nav,FormControl,Card,CardGroup} from 'react-bootstrap'
import logo from './logo.png'


export default class Navar extends React.Component{
render(){ return(
        <div>

          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
                                                 <img
                                                   src={logo}
                                                   width="100"
                                                   height="50"
                                                   className="d-inline-block align-top"
                                                   alt="React Bootstrap logo"
                                                 />
                                               </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/solicitudes/Ofertas">Ofertas Laborales</Nav.Link>
              <Nav.Link href="/solicitudes/Alumnos">Encuentre personal</Nav.Link>
              <Nav.Link href="www.linkedin.com/in/nelson-gonzalez-98a29b182">Contacto</Nav.Link>

            </Nav>

          </Navbar>
          </div>)
          }
          }