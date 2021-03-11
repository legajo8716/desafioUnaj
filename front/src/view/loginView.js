import React from 'react'
import Navar from'../component/navar'
import{Card,CardGroup} from 'react-bootstrap'
import FormularioAlumno from '../component/formularioAlumno';
import FormularioEmpresa from '../component/formularioEmpresa';

import Login from '../component/login';





export default class LoginView extends React.Component{
constructor(props){
super(props)
console.log(this.props.lista)

}


render(){ return(
        <div>
             <Navar/>
        <Card>
          <Card.Header as="h5">Inicia Sesion</Card.Header>
          <Card.Body>
          <Login history={this.props.history} />
       </Card.Body>
        </Card>

        </div>
        )
        }
}