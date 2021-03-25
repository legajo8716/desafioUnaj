import React from'react'
import{Form,Button,Col,Navbar,Nav,FormControl,Card,CardGroup} from 'react-bootstrap'
import apiGeo from '../api/apiGeo.js'
import axios from 'axios';
import '../view/css/home.css'
export default class CardHome extends React.Component{
    constructor(props){
    super(props)
    }
    render(){
        return(

                <Card  onClick={()=>this.props.history.push("/formulario/alumno")}>
                                <Card.Img variant="top" src={this.props.imagen}  className="images"/>
                                <Card.Body>
                                  <Card.Title>{this.props.titulo}</Card.Title>
                                  <Card.Text>
                                   {this.props.texto}
                                  </Card.Text>
                                </Card.Body>
                              </Card>



        )
    }
}