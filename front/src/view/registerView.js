import React from 'react'
import{Form,Button,Col,Navbar,Nav,FormControl,Card,CardGroup} from 'react-bootstrap'
import Navar from'../component/navar'
import Register from'../component/register'

export default class RegisterView extends React.Component{

render(){
    return (
    <div>

        <Navar/>
<Card>
          <Card.Header as="h5">Registrate</Card.Header>
          <Card.Body>
            <Register/>

        </Card.Body>
                </Card>
    </div>

    )


}



}