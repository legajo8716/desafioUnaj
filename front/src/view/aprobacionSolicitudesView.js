import React from 'react'
import Navar from'../component/navar'
import{Card,CardGroup} from 'react-bootstrap'
import AprobacionSolicitudes from '../component/aprobacionSolicitudes';
import Login from '../component/login';





export default class AprobacionSolicitudesView extends React.Component{
constructor(props){
super(props)

}


render(){ return(
 <div>
             <Navar/>
        <Card>
          <Card.Header as="h5">Panel de aprobaciones</Card.Header>
          <Card.Body>
          <AprobacionSolicitudes />

       </Card.Body>
        </Card>

        </div>
        )
        }
}