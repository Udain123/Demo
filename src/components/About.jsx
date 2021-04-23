import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,Row,Card, Col, Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import  logo from "../images/logo.jpg";

const About = () => {
  return (
    <div>
      <div className="navcolor">
        <Navbar expand="lg">
          <Navbar.Brand href="/">Health+</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Disease Prediction" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Cancer">Cancer</NavDropdown.Item>
                <NavDropdown.Item href="/Heart">
                  Heart Disease
                </NavDropdown.Item>
                <NavDropdown.Item href="/Malaria">Malaria</NavDropdown.Item>
                <NavDropdown.Item href="/Diabeties">Diabeties</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Healthy Living"
                className="dropdown"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/Cancer.jsx">Fitness</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                 Nutrients
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Healthy Recipes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Experts</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form>
              <Button variant="outline-primary">Sign in</Button>
              <Button variant="outline-primary">Sign out</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="about">
         <h1 className="heading">About US</h1> 
        <p >
        <img
      className="logo"
      src={logo}
      alt="logo"
    />

          Over sixty percent of our health is determined by social needs like
          access to food, jobs, childcare, and housing. Right now, the way
          healthcare organizations address these problems is broken. Failure is
          costly. We believe there is more to health than healthcare and we’re
          fundamentally rethinking how healthcare organizations and communities
          work together to help people thrive. We came up with the solution that
          everyone should be able to keep a check on his/her health  
          </p>
<p>
          Over sixty percent of our health is determined by social needs like
          access to food, jobs, childcare, and housing. Right now, the way
          healthcare organizations address these problems is broken. Failure is
          costly. We believe there is more to health than healthcare and we’re
          fundamentally rethinking how healthcare organizations and communities
          work together to help people thrive. We came up with the solution that
          everyone should be able to keep a check on his/her health  
        </p>
      </div>
      <section id="team">

    <Row>
    <Col xs={6} md={4}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    </Col>
    <Col xs={6} md={4}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    </Col>
    <Col xs={6} md={4}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    </Col>
  </Row>
  <Row>
    <Col xs={6}> <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card></Col>
    <Col xs={6}> <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card></Col>
  </Row>
  </section>
  </div>
   
  );
};

export default About;
