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

              <Nav.Link href="/formularioAlumno">Ofertas Laborales</Nav.Link>
              <Nav.Link href="#pricing">Encuentre personal</Nav.Link>
              <Nav.Link href="#pricing">Contacto</Nav.Link>

            </Nav>

          </Navbar>
          </div>)
          }
          }