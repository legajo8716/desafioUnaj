import React from 'react'
import{Form,Button,Col,Table} from 'react-bootstrap'




export default class ListaOfertas extends React.Component
{
constructor(props){
super(props);
this.state={lista:this.props.lista}
this.retornarOfertas=this.retornarOfertas.bind(this)
}
retornarOfertas(){
  var data=[{descripcion:"pillo",fechaInicio:"hoy",fechaFinalizacion:"mañana"}]


  data.map((oferta)=>
                                <tr>
                                  <td>{oferta.descripcion}</td>
                                  <td colSpan="2">oferta.fechaInicio</td>
                                  <td>oferta.fechaFinalizacion</td>
                                </tr>
                                )


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
                                </tr>
                                )
                      }

                      </tbody>
                    </Table>



            </div>


    )



}
}