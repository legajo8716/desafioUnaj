import React from 'react'
import{Form,Button,Col} from 'react-bootstrap'
import axios from 'axios';
import Header from '../utilities/header'






export default class FormularioAlumno extends React.Component
{
constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    }
 handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }
   handleSubmit (e) {
         e.preventDefault()
         axios.post('http://localhost:8080/formularioAlumno', this.state,Header)
             .then(response =>alert("formulario enviado")).catch(error=>{alert("error")});
         }

    render() {
    return(<div>
            <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control name="nombre"  placeholder="ingrese su nombre" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control name="apellido" placeholder="ingrese su apellido" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Seleccionar tipo de Documento</Form.Label>
                        <Form.Control name="tipoDni" as="select" onChange={this.handleChange} >
                          <option></option>

                          <option>DNI</option>
                          <option>LC</option>
                          <option>LE</option>
                          <option>CI</option>
                        </Form.Control>
                      </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Numero de documento</Form.Label>
                                    <Form.Control name="dni"  placeholder="ingrese su DNI" onChange={this.handleChange} />
                     </Form.Group>

                   <Form.Group controlId="formBasicEmail">
                     <Form.Label>Email </Form.Label>
                     <Form.Control type="email" name="email" placeholder="Ingrese su email" onChange={this.handleChange} />

                   </Form.Group>
                   <Form.Group controlId="formBasicEmail">
                                   <Form.Label>Carrera</Form.Label>
                                   <Form.Control name="carrera" placeholder="ingrese su carrera"  onChange={this.handleChange} />
                           </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                                     <Form.Label>Año de ingreso</Form.Label>
                                     <Form.Control name="año" placeholder="ingrese el año que comenzo su carrera" onChange={this.handleChange}  />
                    </Form.Group>
                     <Form.Group>
                     <Form.Label>Ingrese su experiencia laboral.</Form.Label>
                     <Form.Control name="experiencia" as="textarea" rows={8} onChange={this.handleChange}  />
                     </Form.Group>

                   <Button variant="primary" type="submit">
                     Enviar
                   </Button>
                 </Form>
           </div>
    )





    }
}