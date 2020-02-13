import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const nav = (props) => {
    return(
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="">Book Now</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Log in </Nav.Link>
            <Nav.Link href="#home">Register Now</Nav.Link>
        </Nav>
  <Form inline>
        <FormControl type="text" placeholder="Search" id='movieName' className="mr-sm-2" />
        <Button onClick={props.event}  variant="outline-info">Search</Button>
  </Form>
  </Navbar>
    ); 
}
export default nav;