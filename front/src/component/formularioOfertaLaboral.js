import React from 'react'
import{Form,Button,Col} from 'react-bootstrap'


export default class FormularioEmpresa extends React.Component
{
constructor(props){
super(props)
this.state={
descripcion:"",
fechaInicio:"",
fechaFinalizacion:""

}
this.handleChange = this.handleChange.bind(this);
this.enviar = this.enviar.bind(this);


}
handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }
enviar(){
this.props.recibirOfertas(this.state)

}

render(){
return(
        <div>
                <Form onSubmit={this.enviar}>
                  <Form.Group>
                     <Form.Label>Ingrese la descripcion del puesto.</Form.Label>
                     <Form.Control as="textarea" rows={8} onChange={this.handleChange}/>
                     </Form.Group>
                   <Form.Group controlId="date" bsSize="large">
                            <Form.Label> Fecha de inicio </Form.Label>
                            <Form.Control type="date" onChange={this.handleChange}
                            />
                          </Form.Group>
                          <Form.Group controlId="date" bsSize="large">
                                                      <Form.Label> Fin de la convocatoria</Form.Label>
                                                      <Form.Control
                                                        type="date" onChange={this.handleChange}
                                                      />
                                                    </Form.Group>
                </Form>
        </div>
)

}




}