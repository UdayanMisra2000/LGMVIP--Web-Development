import React from 'react'
import img3 from './Images/rocket.gif'
import img4 from './Images/Doggy.gif'
import { Col, Row, Container, Card } from 'react-bootstrap'

export default function Footer() {
    return (
        <>
        <div>
        <Container>
  <Row>
    <Col xs={6} md={4}>
    <img src={img3} className="img-fluid animated" alt=" "/>
  </Col>
  <Col xs={6} md={4}>
  <h1>
    Fly like a Rocket with Blue Moon.
  </h1> 
  </Col> 
  <Col xs={6} md={4}>
  <img src={img4} className="img-fluid animated" alt=" "/>
  </Col> 
  </Row>
  <Row><Card bg= "secondary" style={{ width: '18rem' }}>
  <Card.Body> Created by Udayan Misra.</Card.Body>
  </Card>
  </Row>
  </Container>   
  </div>
    </>
    )
}
