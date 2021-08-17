import React from 'react'
import { Spinner, CardGroup, Card, Container, Col, Row } from 'react-bootstrap';
import img2 from './Images/Rok.gif'


export default class Body extends React.Component {
  
    state = {
        loading: true,
        user: null,
    };


    async componentDidMount(){
        const url = "https://reqres.in/api/users?page=1";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({user: data.data, loading: false }); 

    }
    
    render(){
        if (this.state.loading) {
            return <div> loading.....<Spinner animation="border" /> <div>PLease Wait</div></div>
        }

        if (!this.state.user) {
            return <div>Not available</div>
        }

    return (
        <div>
        <Container>
    <CardGroup style={{ width: '40rem' }} className="card-columns mx-auto d-flex justify-content-center col-12" >
  <Card>
    <Card.Img variant="top" src={this.state.user[0].avatar} />
    <Card.Body>
      <Card.Title>
        <div> {this.state.user[0].first_name} {this.state.user[0].last_name} </div></Card.Title>
      <Card.Text>
      <div>{this.state.user[0].email} </div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Spinner animation="grow" variant="success" size ="sm"/> Active</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={this.state.user[1].avatar} />
    <Card.Body>
      <Card.Title>{this.state.user[2].first_name} {this.state.user[2].last_name}</Card.Title>
      <Card.Text>
      <div>{this.state.user[1].email} </div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Spinner animation="grow" variant="danger" size ="sm"/> In-Active</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={this.state.user[2].avatar}/>
    <Card.Body>
      <Card.Title>
        <div> {this.state.user[2].first_name} {this.state.user[2].last_name} </div></Card.Title>
      <Card.Text>
      <div>{this.state.user[2].email} </div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Spinner animation="grow" variant="danger" size ="sm"/> In-Active</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={this.state.user[3].avatar} />
    <Card.Body>
      <Card.Title>
        <div> {this.state.user[3].first_name} {this.state.user[3].last_name} </div></Card.Title>
      <Card.Text>
      <div>{this.state.user[3].email} </div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Spinner animation="grow" variant="success" size ="sm"/> Active</small>
    </Card.Footer>
  </Card>
</CardGroup>
<CardGroup style={{ width: '20rem' }} className="card-columns mx-auto d-flex justify-content-center col-12">
  <Card>
    <Card.Img variant="top" src={this.state.user[4].avatar} />
    <Card.Body>
      <Card.Title>
        <div> {this.state.user[4].first_name} {this.state.user[4].last_name} </div></Card.Title>
      <Card.Text>
      <div>{this.state.user[4].email} </div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Spinner animation="grow" variant="success" size ="sm"/> Active</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={this.state.user[5].avatar}/>
    <Card.Body>
      <Card.Title>
        <div> {this.state.user[5].first_name} {this.state.user[5].last_name} </div></Card.Title>
      <Card.Text>
      <div>{this.state.user[5].email} </div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Spinner animation="grow" variant="success" size ="sm"/> Active</small>
    </Card.Footer>
  </Card>
</CardGroup>
<div>
<Container>
  <Row>
    <Col xs={6} md={4}>
      
    </Col>
    <Col md={{ span: 5, offset: 4 }}>
      <img src={img2} className="img-fluid animated" alt=" "/>
    </Col>
    <Col xs={6} md={4}>

    </Col>
  </Row>
</Container>
</div>
</Container>
</div>
    );
    }


}
