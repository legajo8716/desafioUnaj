import React from 'react'
import{Form,Button,Col,Table,Alert} from 'react-bootstrap'
import axios from 'axios';
import Header from '../utilities/header'

export default class AprobacionSolicitudes extends React.Component
{
constructor(props){
    super(props);
    this.aprobar=this.aprobar.bind(this);
    this.desaprobar=this.desaprobar.bind(this)

  }

aprobar(dato){

                console.log(dato)
    axios.post("http://localhost:8080/agregar"+this.props.tipo,dato,Header).then(response =>alert("Aprobado")).catch(error=>{alert("Error")})
      axios.post("http://localhost:8080/eliminarformulario",dato,Header)


}

desaprobar(dato){

   axios.post("http://localhost:8080/eliminarformulario",dato,Header).then(response=>this.props.callback(dato)).catch(error=>{alert("error al borrar")})

    }


render(){
return(
            <div>
                <Table striped bordered hover variant="dark">
                      <thead>
                            <tr>{this.props.numbers.map((number)=><td>{number}</td>)}
                            <td>aprobar</td>
                            <td>desaprobar</td>
                            </tr>
                       </thead>
                      <tbody>
                            {
             this.props.numbers.map(
                                    (number)=>

                                    <td>{  this.props.datos.map(
                                                        (dato)=><tr>{dato[number]}</tr>

                                                                )

                                         }

                                    </td>


                                    )

                           }
                           <td> {this.props.datos.map((dato)=><tr><Button onClick={()=>this.aprobar(dato)}>aprobar</Button></tr>)
                           } </td>
                           <td> {this.props.datos.map((dato)=><tr><Button onClick={()=>this.desaprobar(dato)}>✖</Button></tr>)
                                                      } </td>



                        </tbody>
                               </Table>
                           </div>
        )

        }
        }