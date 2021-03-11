import React from 'react'
import{Form,Button,Col,Table,Modal} from 'react-bootstrap'
import axios from 'axios';




export default class ListaAlumnos extends React.Component
{
constructor(props){
super(props);
this.activarModal=this.activarModal.bind(this)
this.state={
            lista:[],
            modal:false

            }
}
async componentDidMount () {

    const response = await axios.get("http://localhost:8080/alumnos")
    this.setState({lista:(response.data)})

  }
activarModal(valor){

this.setState({modal:valor})

}

render(){
    return(
            <div>
                    <Table striped bordered hover variant="dark">
                      <thead>
                        <tr>


                         <th>#</th>
                          <th>Nombre</th>
                          <th>Apellido</th>
                          <th>Tipo Dni</th>
                          <th>DNI</th>
                          <th>Carrera</th>
                          <th>Año</th>
                          <th>Experiencia</th>

                        </tr>
                      </thead>
                      <tbody>

                     {

 this.state.lista.map(alumno=>
                                <tr>
                                  <td>{alumno.id}</td>

                                  <td>{alumno.nombre}</td>
                                  <td>{alumno.apellido}</td>
                                  <td >{alumno.tipoDni}</td>
                                  <td>{alumno.dni}</td>
                                  <td>{alumno.carrera}</td>
                                  <td>{alumno.año}</td>

                                  <td>  <Button   onClick={()=>this.activarModal(true)} >
                                        Ver experiencia
                                        </Button>
                                        <Modal
                                                show={this.state.modal}

                                                dialogClassName="modal-90w"
                                                aria-labelledby="example-custom-modal-styling-title"
                                              >
                                                <Modal.Header closeButton  onClick={()=>this.activarModal(false)}  >
                                                  <Modal.Title id="example-custom-modal-styling-title">
                                                    Experiencia Laboral
                                                  </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                  <p>
                                                    {alumno.experiencia}
                                                  </p>
                                                </Modal.Body>
                                              </Modal>              </td>

                                </tr>
                                )
                      }

                      </tbody>
                    </Table>



            </div>


    )



}
}