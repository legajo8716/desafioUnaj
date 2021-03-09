import React from 'react'
import{Form,Button,Col} from 'react-bootstrap'




export default class FormularioAlumno extends React.Component
{
    render() {
    return(<div>
            <Form>
                    <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="email" placeholder="ingrese su nombre" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="email" placeholder="ingrese su apellido" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Seleccionar tipo de Documento</Form.Label>
                        <Form.Control as="select">
                          <option></option>

                          <option>DNI</option>
                          <option>LC</option>
                          <option>LE</option>
                          <option>CI</option>
                        </Form.Control>
                      </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Numero de documento</Form.Label>
                                    <Form.Control type="email" placeholder="ingrese su DNI" />
                     </Form.Group>

                   <Form.Group controlId="formBasicEmail">
                     <Form.Label>Email </Form.Label>
                     <Form.Control type="email" placeholder="Ingrese su email" />

                   </Form.Group>
                   <Form.Group controlId="formBasicEmail">
                                   <Form.Label>Carrera</Form.Label>
                                   <Form.Control type="email" placeholder="ingrese su carrera" />
                           </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                                     <Form.Label>Año de ingreso</Form.Label>
                                     <Form.Control type="email" placeholder="ingrese el año que comenzo su carrera" />
                    </Form.Group>
                     <Form.Group>
                     <Form.Label>Ingrese su experiencia laboral.</Form.Label>
                     <Form.Control as="textarea" rows={8} />
                     </Form.Group>

                   <Button variant="primary" type="submit">
                     Enviar
                   </Button>
                 </Form>
           </div>
    )





    }
}