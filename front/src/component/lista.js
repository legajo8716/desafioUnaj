import React from 'react'
import{Form,Button,Col,Table,Alert} from 'react-bootstrap'
import axios from 'axios';

export default class AprobacionSolicitudes extends React.Component
{
constructor(props){
    super(props);

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
                                                        (dato)=><tr>{dato[number]}</tr> )

                                         }

                                          </td>

                                    )

                           }
                                                               <td><tr style={{}}><Button>✔</Button></tr></td>
                                                               <td><tr><Button>✖</Button></tr></td>


                        </tbody>
                               </Table>
                           </div>
        )

        }
        }