import './App.css';
import logo from './moon.png'
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import Body from './Components/Body';

function App() {
  return (
    <>
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/user-data" component={Body}/>
        <Redirect to="/"/>
      </Switch>
      </BrowserRouter>
      <Container>
  <Row>
    <Col xs={6} md={4}>
      
    </Col>
    <Col md={{ span: 7, offset: 5 }}>
      <img src = {logo} className ="App-logo" alt ="logo"/>
    </Col>
    <Col xs={6} md={4}>

    </Col>
  </Row>
</Container>
    </>
    
  );
}

export default App;
