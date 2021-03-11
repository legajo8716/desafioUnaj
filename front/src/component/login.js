import React from 'react'
import{Form,Button,Col,Navbar,Nav,FormControl,Card,CardGroup} from 'react-bootstrap'
import axios from 'axios';

export default class Login extends React.Component{
constructor(props){
    super(props);
    this.registrarte=this.registrarte.bind(this)

}
registrarte(){
        this.props.history.push("/registro")

}

render(){
    return (
    <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email" />
            <Form.Text className="text-muted">
              Nunca revele su contraseña
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" />
          </Form.Group>

          <>
            <Button variant="primary" size="lg" block onClick={this.registrarte}>
                Registrate
            </Button>
            <Button variant="secondary" size="lg" block>
              Iniciar sesion
            </Button>
          </>
        </Form>
    </div>

    )


}



}