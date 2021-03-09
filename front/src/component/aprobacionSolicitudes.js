import React from 'react'
import{Form,Button,Col,Table} from 'react-bootstrap'
import axios from 'axios';




export default class AprobacionSolicitudes extends React.Component
{


constructor(props){
    super(props);
    this.state={
        solicitudes:{},
        solicitudesAlumnos:{},
        solicitudesEmpresas:{}

    }
}
async componentDidMount () {
 const response = await axios.get("https://localhost:8080/formularioAlumno")
    console.log(response)
    this.setState({
      paraAprobar: response.data.provincias

    })



}
render(){
return(
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Tipo</th>
              <th>DNI</th>
              <th>Fecha de Nacimiento</th>
              <th>Email</th>
              <th>Carrera</th>
              <th>Año</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>



)

}
}