import React from 'react'
import { Nav, Navbar,Button, NavDropdown, Container } from 'react-bootstrap'
import Footer from './Footer'
import img1 from './Images/logo.jpg'


export default function Header() {
    return (
      <>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container>
  <Navbar.Brand > <img src = {img1} width = "50" height = "50" /> Blue Moon </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Navbar.Collapse className="justify-content-end">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <NavDropdown title="Projects" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Careers" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Product types" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#action1">Blog</Nav.Link>
      <Nav.Link href="#action2">FAQ</Nav.Link>
    </Nav>
    <Nav.Link href="#action2">log in</Nav.Link>
    <Button href="/user-data" variant="outline-success">
    Get Users
    </Button>
  </Navbar.Collapse>
  </Navbar.Collapse>
  </Container>
</Navbar>

<Footer/>
</>

    )
}
