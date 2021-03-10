import React from 'react'
import{Form,Button,Col,Table} from 'react-bootstrap'




export default class SolicitudesOfertas extends React.Component
{
constructor(props){
super(props);
this.state={lista:this.props.lista

            }
}

render(){
    return(
            <div>
                    <Table striped bordered hover variant="dark">
                      <thead>
                        <tr>

                         <th>#</th>
                          <th>Descripcion del puesto</th>
                          <th>Fecha de inicio</th>
                          <th>Fecha de finalizacion</th>
                          <th>Empresa</th>
                        </tr>
                      </thead>
                      <tbody>

                      {

 this.state.lista.map((oferta)=>
                                <tr>
                                  <td>{oferta.numero}</td>
                                  <td>{oferta.descripcion}</td>
                                  <td >{oferta.fechaInicio}</td>
                                  <td>{oferta.fechaFinalizacion}</td>
                                  <td>{oferta.empresa}</td>

                                </tr>
                                )
                      }

                      </tbody>
                    </Table>



            </div>


    )



}
}