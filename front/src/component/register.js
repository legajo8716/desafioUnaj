

import React from 'react'
import{Form,Button,Col,Navbar,Nav,FormControl,Card,CardGroup} from 'react-bootstrap'
import Navar from'../component/navar'
import axios from 'axios';
import Header from '../utilities/header'



export default class Register extends React.Component{
constructor(props){
    super(props);
    this.state={}
    this.onChange=this.onChange.bind(this)
    this.register=this.register.bind(this)
}


register(event){
     event.preventDefault()

    if(this.state.contraseña==this.state.contraseña1){

   axios.post('http://localhost:8080/register',
                    {"nombreUsuario":this.state.nombreUsuario,
                      "contraseña":this.state.contraseña  }
                    ,Header)
            .then(response =>this.props.history.push("/login")).catch("erro");
    }
else{
    alert("Las contraseñas deben coincidir")

}

}
onChange(event){
this.setState({[event.target.name]: event.target.value })
}

render(){
    return (
    <div>
       <Form onSubmit={this.register}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control name="nombreUsuario" placeholder="Ingrese su usuario" onChange={this.onChange} />

          </Form.Group>

          <Form.Group controlId="formBasicPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control type="password" name="contraseña" placeholder="Ingrese su contraseña" onChange={this.onChange}/>
                    </Form.Group>

          <Form.Group controlId="formBasicPassword">
                      <Form.Label>Reingresa tu contraseña</Form.Label>
                      <Form.Control type="password" name="contraseña1" placeholder="Contraseña nuevamente" onChange={this.onChange}/>
                    </Form.Group>

          <>
            <Button variant="primary" size="lg" type="onSubmit" block>
                Registrate
            </Button>

          </>
        </Form>
      </div>
      )
      }
      }