import React from 'react'
import{Form,Button,Col,Table} from 'react-bootstrap'




export default class ListaOfertas extends React.Component
{
constructor(props){
super(props);
this.borrar=this.borrar.bind(this)
            }

borrar(oferta){
this.props.callback(oferta)
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
                          <th>Borrar</th>
                        </tr>
                      </thead>
                      <tbody>
                     {this.props.lista.map((oferta)=>
                                <tr>
                                  <td>{oferta.numero}</td>
                                  <td>{oferta.descripcion}</td>
                                  <td >{oferta.fechaInicio}</td>
                                  <td>{oferta.fechaFinalizacion}</td>
                                  <td>{oferta.fechaFinalizacion}</td>
                                  <td>
                                        <Button variant="secondary" size="lg" block onClick={()=>this.borrar(oferta)}>
                                         Borrar</Button>
                                  </td>
                                </tr>
                                )
                      }

                      </tbody>
                    </Table>



            </div>


    )



}
}