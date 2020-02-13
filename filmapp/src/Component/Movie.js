import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button' ;
import '../App.css';
    
const Movie = (props) => {
    const handle=()=>{
    alert("Thank you for Watching")
        
    }
    return(
    <Card id={props.id} style={{ width: '18rem' }} >
                <Card.Img style={{ width: '100%' }}variant="top" src={props.poster} />
            <Card.Body>
    <Card.Title 
        style={{ color:'Red'}}>{props.title},{props.release_date}
    </Card.Title>
    <Card.Text 
        style={{ color:'black'}}>
        {props.overview}
    </Card.Text>
        <Button onClick={handle} variant="primary">Click Me </Button>
    </Card.Body>
    </Card>     
    ) 
}
export default Movie;