import React from 'react'
import Navar from'../component/navar'
import{Card,CardGroup} from 'react-bootstrap'
import ListaDeOfertas from '../component/listas/listaOfertas';

import Login from '../component/login';

export default class ListaDeOfertasView extends React.Component{
constructor(props){
super(props)

}


render(){ return(
 <div>
             <Navar/>
        <Card>
          <Card.Header as="h5">Ofertas</Card.Header>
          <Card.Body>
          <ListaDeOfertas />
       </Card.Body>
        </Card>

        </div>
        )
        }
}