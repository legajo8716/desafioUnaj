

import React from 'react'
import{Form,Button,Col,Navbar,Nav,FormControl,Card,CardGroup} from 'react-bootstrap'
import Navar from'../component/navar'

export default class Register extends React.Component{

render(){
    return (
    <div>
       <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email" />

          </Form.Group>

          <Form.Group controlId="formBasicPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Ingrese su contraseña" />
                    </Form.Group>

          <Form.Group controlId="formBasicPassword">
                      <Form.Label>Reingresa tu contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Contraseña nuevamente" />
                    </Form.Group>

          <>
            <Button variant="primary" size="lg" block>
                Registrate
            </Button>

          </>
        </Form>
      </div>
      )
      }
      }