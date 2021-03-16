import React from 'react'
import{Form,Button,Col,Table,Alert} from 'react-bootstrap'
import axios from 'axios';

export default class AprobacionSolicitudes extends React.Component
{
constructor(props){
    super(props);
    this.aprobar=this.aprobar.bind(this);
    this.desaprobar=this.desaprobar.bind(this)

  }
aprobar(dato){
//eliminarlo de las props
      this.props.callback(dato)

}

desaprobar(dato){
        console.log(dato)
      this.props.callback(dato)

      /*       const header={
                 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }
                 axios.post("http://localhost:8080/deleteFormulario",dato,header).then(response=>
                                                        this.props.callback(dato)).catch(alert("error"))        */
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
                           <td> {this.props.datos.map((dato)=><tr><Button onClick={()=>this.aprobar(dato)}>&#128522</Button></tr>)
                           } </td>
                           <td> {this.props.datos.map((dato)=><tr><Button onClick={()=>this.desaprobar(dato)}>✖</Button></tr>)
                                                      } </td>



                        </tbody>
                               </Table>
                           </div>
        )

        }
        }