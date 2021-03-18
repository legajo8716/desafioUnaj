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
    }
borrarAlumno(itemDeleted){
let datosUpdate= this.state.paraAprobarAlumno
console.log(itemDeleted)
console.log(datosUpdate)
datosUpdate=datosUpdate.filter((item)=>item.id!=itemDeleted.id)
this.setState({paraAprobarAlumno:datosUpdate })
console.log(this.state.paraAprobarAlumno)

}
borrarOferta(itemDeleted){
let datosUpdate= this.state.paraAprobarEmpresa
datosUpdate=datosUpdate.filter((item)=>item.id!=itemDeleted.id)
this.setState({paraAprobarEmpresa:datosUpdate })

}

render(){
return( <div>
            <h2>Alumnos</h2>
           <Lista numbers={["nombre","apellido", "tipoDni","dni","carrera","año","experiencia"]} datos={this.state.paraAprobarAlumno} tipo="alumno" callback={this.borrarAlumno.bind(this)}/>
            <h2>Ofertas Laborales</h2>
           <Lista numbers={["descripcion","fechaInicio","fechaFinalizacion"]} datos={this.state.paraAprobarEmpresa} tipo="oferta" callback={this.borrarOferta.bind(this)}/>
        </div>

)

}
}