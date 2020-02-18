import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const nav = (props) => {
    return(
  <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
            
            <Nav.Link > <Link to ="/login">Log in </Link></Nav.Link>
            <Nav.Link>  <Link to ="Registration">Register Now </Link> </Nav.Link> 
        </Nav>
  <Form inline>
        <FormControl type="text" placeholder="Search" id='movieName' className="mr-sm-2" />
        <Button onClick={props.event}  variant="outline-info">Search</Button>
  </Form>
  </Navbar>
    )
}
export default nav;