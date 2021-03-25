import React from 'react'
import{Form,Button,Col,Modal} from 'react-bootstrap'
import apiGeo from '../api/apiGeo.js'
import axios from 'axios';
import OfertaLaboral from './formularioOfertaLaboral'
import AgregadorDeOfertas from './listas/agregadorDeOfertas'
import Header from '../utilities/header'


export default class FormularioEmpresa extends React.Component
{
constructor(props){
super(props);
this.seleccionProvincia = this.seleccionProvincia.bind(this);
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.agregarOferta = this.agregarOferta.bind(this);

this.state={
provincias:[],
provinciaSeleccionada:"",
localidades:[],
ofertasLaborales:[],
insertar:false,
cantidadDeOfertas:0
}
}

  handleChange(event) {
   const list=Object.assign(this.state.provinciaSeleccionada,{[event.target.name] : event.target.value})
    this.setState({provinciaSeleccionada:list});
  }



async componentDidMount () {
    const response = await axios.get("https://apis.datos.gob.ar/georef/api/provincias")
    this.setState({
      provincias: response.data.provincias

    })
  }

seleccionProvincia(event){
    this.handleChange(event);
    const idProvincia=axios.get("https://apis.datos.gob.ar/georef/api/provincias?nombre="+event.target.value);
    const response =  axios.get("https://apis.datos.gob.ar/georef/api/municipios?provincia="+event.target.value)
response.then(
  (result) =>{ this.setState({localidades:result.data.municipios})},
  function(error) { /* handle an error */ }
);
   }


agregarOferta(condicion){
this.setState({insertar:condicion})
}


     handleSubmit (e) {

            const formulario=this.state.provinciaSeleccionada
            e.preventDefault()




if(this.state.provinciaSeleccionada.nombre!=null&&this.state.provinciaSeleccionada.cuit!=null&&this.state.provinciaSeleccionada.provincia!=null&&this.state.provinciaSeleccionada.localidad!=null&&this.state.provinciaSeleccionada.direccion!=null&&this.state.provinciaSeleccionada.telefono!=null&&this.state.provinciaSeleccionada.email!=null){

        axios.post('http://localhost:8080/formularioEmpresa',
                    {
                        nombre:this.state.provinciaSeleccionada.nombre,
                        cuit:this.state.provinciaSeleccionada.cuit,
                        provincia:this.state.provinciaSeleccionada.provincia,
                        localidad:this.state.provinciaSeleccionada.localidad,
                        direccion:this.state.provinciaSeleccionada.direccion,

                        telefono:this.state.provinciaSeleccionada.telefono,
                        email:this.state.provinciaSeleccionada.email,
                        ofertas:this.state.ofertasLaborales
                    }
                    ,Header)
            .then(response =>alert("Formulario enviado")).catch(error=>{alert("Error")});
            }
            else{
            alert("Rellene todos los campos")
            }

        }
      recibirOferta(oferta){

 const list=this.state.ofertasLaborales
 list.push({"numero":this.state.cantidadDeOfertas,"descripcion" : oferta.descripcion,
                                                        "fechaInicio":oferta.fechaInicio,
                                                        "fechaFinalizacion":oferta.fechaFinalizacion,
                                                         })
    this.setState({ofertasLaborales:list,cantidadDeOfertas:this.state.cantidadDeOfertas+1,"insertar":false});
    console.log(this.state.ofertasLaborales)


      }
borrarOferta(numero){
let ofertas= this.state.ofertasLaborales
ofertas=ofertas.filter((item)=>item!=numero)
this.setState({ofertasLaborales:ofertas })
}


    render() {
    return(<div>
                    <Form onSubmit={this.handleSubmit}>

                                        <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Nombre empresa</Form.Label>
                                                <Form.Control name="nombre" type="text" placeholder="Ingrese el nombre del establecimiento"  onChange={this.handleChange} />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                                <Form.Label>CUIT</Form.Label>
                                                <Form.Control type="number" name="cuit" placeholder="Ingrese CUIT de la empresa"  onChange={this.handleChange}/>
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                                            <Form.Label>Provincia</Form.Label>
                                         <Form.Control as="select" onChange={this.seleccionProvincia} name="provincia">
                                              {this.state.provincias.map(provincia=> <option>{provincia.nombre}</option>)}
                                             </Form.Control>
                                          </Form.Group>

                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                           <Form.Label>Seleccionar su localidad</Form.Label>
                                           <Form.Control as="select" name="localidad" onChange={this.handleChange}>
                                                 {this.state.localidades.map(localidad=> <option>{localidad.nombre}</option>)}
                                          </Form.Control>

                                          </Form.Group>




                                       <Form.Group controlId="formBasicEmail">
                                                       <Form.Label>Direccion</Form.Label>
                                                       <Form.Control type="text" name="direccion" placeholder="ingrese su direccion"  onChange={this.handleChange} />
                                               </Form.Group>
                                          <Form.Group controlId="formBasicEmail">
                                                                                               <Form.Label>Telefono</Form.Label>
                                                                                               <Form.Control type="number" name="telefono" placeholder="ingrese su Telefono"  onChange={this.handleChange} />
                                                                                       </Form.Group>
                                         <Form.Group controlId="formBasicEmail">
                                         <Form.Label>Email </Form.Label>
                                                                                 <Form.Control type="text" name="email" placeholder="Ingrese su email"  onChange={this.handleChange}/>
                                                                               </Form.Group>

                                       <>
                                         <Button variant="primary" size="lg"  onClick={()=>this.agregarOferta(true)} >
                                            Agregar oferta
                                         </Button>

                                           <div style={{marginTop:"10px"}}>
                                         <AgregadorDeOfertas  callback={this.borrarOferta.bind(this)} lista={this.state.ofertasLaborales}  />
                                            </div>

                                         <Modal size="lg" show={this.state.insertar}>
                                                            <Modal.Dialog style={{width:"100%",height:"100%"}} >

                                                            <Modal.Header closeButton>
                                                                <Modal.Title>Agrega una oferta</Modal.Title>
                                                            </Modal.Header>

                                                            <Modal.Body>
                                                              <OfertaLaboral callback={this.recibirOferta.bind(this)} />
                                                              </Modal.Body >
                                                              <Modal.Footer>
                                                                <Button variant="secondary"  onClick={() => this.agregarOferta(false)} >Cerrar</Button>
                                                              </Modal.Footer>
                                                             </Modal.Dialog>
                                           </Modal>
                                        <Button variant="secondary" type="submit" size="lg" block style={{marginTop:"10px"}} >
                                                   Enviar
                                         </Button>
                                       </>
                                     </Form>
            </div>
            )
}}