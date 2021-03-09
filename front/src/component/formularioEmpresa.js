import React from 'react'
import{Form,Button,Col,Modal} from 'react-bootstrap'
import apiGeo from '../api/apiGeo.js'
import axios from 'axios';
import OfertaLaboral from './formularioOfertaLaboral'
import ListaOfertas from './listaDeOfertas'


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
insertar:false
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

            console.log("envie")
            const formulario=this.state.provinciaSeleccionada
            console.log(this.state.provinciaSeleccionada)
        e.preventDefault()


            const header={
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }

        axios.post('http://localhost:8080/formulario',
                    {"nombre":"nelsiton", "email":"pepi"},header)
            .then(response =>alert("usuario creado con exito")).catch(error=>{alert("Usuario incorrecto")});
         alert("sumir")
        }

      recibirOferta(oferta){
 const list=Object.assign(this.state.ofertasLaborales,{"descripcion" : oferta.descripcion,
                                                        "fechaInicio":oferta.fechaInicio,
                                                        "fechaFinalizacion":oferta.fechaFinalizacion})
    this.setState({ofertasLaborales:list});


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
                                                <Form.Control type="text" name="cuit" placeholder="Ingrese CUIT de la empresa"  onChange={this.handleChange}/>
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Provincia</Form.Label>

                                            <Form.Control as="select" onChange={this.seleccionProvincia} name="provincia">
                                              {this.state.provincias.map(provincia=> <option>{provincia.nombre}</option>)}
                                             </Form.Control>
                                          </Form.Group>

                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                           <Form.Label>Seleccionar su localidad</Form.Label>
                                           <Form.Control as="select" name="localidad">
                                                 {this.state.localidades.map(localidad=> <option>{localidad.nombre}</option>)}
                                          </Form.Control>

                                          </Form.Group>




                                       <Form.Group controlId="formBasicEmail">
                                                       <Form.Label>Direccion</Form.Label>
                                                       <Form.Control type="text" placeholder="ingrese su direccion"  onChange={this.handleChange} />
                                               </Form.Group>
                                          <Form.Group controlId="formBasicEmail">
                                                                                               <Form.Label>Telefono</Form.Label>
                                                                                               <Form.Control type="text" placeholder="ingrese su direccion"  onChange={this.handleChange} />
                                                                                       </Form.Group>
                                         <Form.Group controlId="formBasicEmail">
                                                                                 <Form.Label>Email </Form.Label>
                                                                                 <Form.Control type="text" name="email" placeholder="Ingrese su email"  onChange={this.handleChange}/>
                                                                               </Form.Group>

                                       <>
                                         <Button variant="primary" size="lg"  onClick={()=>this.agregarOferta(true)} >
                                            Agregar oferta
                                         </Button>


                                         <ListaOfertas lista={this.state.ofertasLaborales}/>


                                         <Modal size="lg" show={this.state.insertar}>
                                        <Modal.Dialog style={{width:"100%",height:"100%"}} >
                                          <Modal.Header closeButton>
                                            <Modal.Title>Agrega una oferta</Modal.Title>
                                          </Modal.Header>

                                          <Modal.Body >
                                          <OfertaLaboral callback={this.recibirOferta.bind(this)} />

                                          </Modal.Body >


                                          <Modal.Footer>
                                            <Button variant="secondary"  onClick={() => this.agregarOferta(false)} >Cerrar</Button>
                                            <Button variant="primary">Guardar oferta</Button>
                                          </Modal.Footer>
                                        </Modal.Dialog>
                                        </Modal>


                                         <Button variant="secondary" size="lg" block style={{marginTop:"10px"}} >
                                           Enviar
                                         </Button>
                                       </>
                                     </Form>
            </div>
            )
}}