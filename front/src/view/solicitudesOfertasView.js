import React from 'react'
import Navar from'../component/navar'
import{Card,CardGroup} from 'react-bootstrap'
import SolicitudesOfertas from '../component/solicitudesOfertas';

import Login from '../component/login';

export default class SolicitudesOfertasView extends React.Component{
constructor(props){
super(props)

}


render(){ return(
 <div>
             <Navar/>
        <Card>
          <Card.Header as="h5">Ofertas</Card.Header>
          <Card.Body>
          <SolicitudesOfertas />
       </Card.Body>
        </Card>

        </div>
        )
        }
}