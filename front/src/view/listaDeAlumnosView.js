import React from 'react'
import Navar from'../component/navar'
import{Card,CardGroup} from 'react-bootstrap'
import ListaAlumnos from '../component/listas/listaAlumnos';
import Login from '../component/login';

export default class ListaDeAlumnosView extends React.Component{
constructor(props){
super(props)
}
render(){ return(
        <div>
              <Navar/>
              <Card>
                  <Card.Header as="h5">Alumnos</Card.Header>
                  <Card.Body>
                    <ListaAlumnos />
                  </Card.Body>
               </Card>
        </div>
        )
        }
}