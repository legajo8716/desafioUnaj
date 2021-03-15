import React from 'react'
import{Form,Button,Col,Table,Alert} from 'react-bootstrap'
import axios from 'axios';
import Lista from './lista'



export default class AprobacionSolicitudes extends React.Component
{
constructor(props){
    super(props);
    this.state={
                paraAprobarAlumno:[],
                paraAprobarEmpresa:[]

                }

}
async componentDidMount () {
 const responseAlumno = await axios.get("http://localhost:8080/formulariosAlumnos")
 this.setState({ paraAprobarAlumno: (responseAlumno.data)})

     const responseEmpresa = await axios.get("http://localhost:8080/formulariosOferta")
        this.setState({ paraAprobarEmpresa: (responseEmpresa.data)})
        console.log(responseEmpresa.data)
    }


render(){
return( <div>
            <h2>Alumnos</h2>
           <Lista numbers={["nombre","apellido", "tipoDni","dni","carrera","año","experiencia"]} datos={this.state.paraAprobarAlumno}/>
            <h2>Ofertas Laborales</h2>
           <Lista numbers={["descripcion","fechaInicio","fechaFinalizacion"]} datos={this.state.paraAprobarEmpresa}/>
        </div>

)

}
}