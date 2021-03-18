import React from 'react'
import Navar from'../component/navar'
import{Card,CardGroup} from 'react-bootstrap'
import FormularioAlumno from '../component/formularioAlumno';
import FormularioEmpresa from '../component/formularioEmpresa';






export default class FormularioView extends React.Component{
constructor(props){
super(props)
console.log(this.props.lista)

}


render(){ return(
        <div>
             <Navar/>
        <Card>
          <Card.Header as="h5">formulario {this.props.lista}</Card.Header>
          <Card.Body>
{(this.props.lista=="alumno") ? <FormularioAlumno history={this.props.history}/>:<FormularioEmpresa history={this.props.history}/>}
       </Card.Body>
        </Card>

        </div>
        )
        }
}