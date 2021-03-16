import React from 'react'
import{Form,Button,Col,Navbar,Nav,FormControl,Card,CardGroup} from 'react-bootstrap'
import axios from 'axios';

export default class Login extends React.Component{
constructor(props){
    super(props);
    this.state={}
    this.registrarte=this.registrarte.bind(this)
    this.login=this.login.bind(this)
    this.onChange=this.onChange.bind(this)
}
registrarte(){
        this.props.history.push("/registro")
}

login(event){
     event.preventDefault()

                const header={
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }

   axios.post('http://localhost:8080/login',
                    this.state
                    ,header)
            .then(response =>this.props.history.push("/aprobacion/solicitudes")).catch(error=>{alert("Usuario incorrecto")});


}
onChange(event){
this.setState({[event.target.name]: event.target.value })
}

render(){
    return (
    <div>
        <Form onSubmit={this.login}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control placeholder="Ingrese su email" name="nombreUsuario" onChange={this.onChange}/>
            <Form.Text className="text-muted">
              Nunca revele su contraseña
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña"  name="contraseña" onChange={this.onChange}/>
          </Form.Group>

          <>
            <Button variant="primary" size="lg" block onClick={this.registrarte}>
                Registrate
            </Button>
            <Button variant="secondary" size="lg" block type="onSubmit">
              Iniciar sesion
            </Button>
          </>
        </Form>
    </div>

    )


}



}