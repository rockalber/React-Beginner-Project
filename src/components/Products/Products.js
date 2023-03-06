import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Products.css';

const Products = (props) => {
  console.log(props.title)
  return ( 
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.image}/>  <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.TextArea}
      </Card.Text>
      <Button variant="primary">Click Here </Button>
    </Card.Body>
  </Card>

  )
}

export default Products