import React from 'react'
import Navar from'../component/navar'
import{Card,CardGroup} from 'react-bootstrap'
import SolicitudesAlumnos from '../component/solicitudesAlumnos';

import Login from '../component/login';





export default class SolicitudesAlumnosView extends React.Component{
constructor(props){
super(props)

}


render(){ return(
 <div>
             <Navar/>
        <Card>
          <Card.Header as="h5">Alumnos</Card.Header>
          <Card.Body>
          <SolicitudesAlumnos />
       </Card.Body>
        </Card>

        </div>
        )
        }
}