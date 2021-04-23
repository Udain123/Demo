import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav,  NavDropdown,  Form, Carousel} from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


import home from "../images/home.jpg";
import exercise from "../images/exercise.jpeg";
import food from "../images/food.jpeg";
import sleep from "../images/sleep.jpeg";
import cando from "../images/cando.jpeg";
import calorie from "../images/calorie.jpg";


function Home() {
    return (
      <>
      <div className="navcolor">
              <Navbar   expand="lg" >
        <Navbar.Brand href="/">Health+</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <NavDropdown title="Disease Prediction" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Cancer">Cancer</NavDropdown.Item>
              <NavDropdown.Item href="/Heart">Heart Disease</NavDropdown.Item>
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
          <Form inline>
          <Button variant="outline-primary">Sign in</Button>
            <Button variant="outline-primary">Sign out</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      </div>


      <div className="carousel">
      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={home}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>5 Simple Tips for Fitness Success </h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    
      className="d-block w-100"
      src={exercise}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Exercise Daily</h3>
      <p>Exercise daily for at least an hour. You do not have to kill yourself from running, jogging, etc., but you should have some sort of moderate physical activity in your everyday life.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={food}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Eat the Right Foods and Portion Each Meal</h3>
      <p>Fruits and vegetables are the best thing to eat when getting into shape. Apples, for example, do a good job at making the stomach feel full for up to 3 to 4 hours. Green vegetables such as green beans and broccoli keep the digestive system clean and running</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={calorie}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Keep Track of Calories and Food Intake Per Day</h3>
      <p>Keeping track of how many calories you eat in a day will be helpful in planning out your physical exercising.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={sleep}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Be Sure to Get Sleep</h3>
      <p>Even though most of us have eight-hour jobs during the day or night, it is crucial to get enough sleep to recharge the body's batteries. Six to eight hours of sleep will keep the body going throughout the day</p>
    </Carousel.Caption>
  </Carousel.Item>


<Carousel.Item>
    <img
      className="d-block w-100"
      src={cando}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Stay Motivated</h3>
      <p>An important key to being in shape is to set goals and keep a positive mindset. If you stay positive, you will be able to push yourself to get that fit body you've always wanted.</p>
    </Carousel.Caption>
  </Carousel.Item>

  </Carousel>
      </div>
      <div className="footer">
      <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
      <div style={{ backgroundColor: "#0d8bc5" }}>
        <MDBContainer>
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
                Get connected with us on social networks!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a className="fb-ic ml-0">
                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter white-text mr-lg-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram white-text mr-lg-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-centre">
        <MDBRow className="mt-3">
         
          <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Diseases</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="/Cancer" className="dark-grey-text">
               Cancer
              </a>
            </p>
            <p>
              <a href="/Diabetes" className="dark-grey-text">
                Diabeties
              </a>
            </p>
            <p>
              <a href="/Heart" className="dark-grey-text">
                Heart Disease
              </a>
            </p>
            <p>
              <a href="/Malaria" className="dark-grey-text">
               Malaria
              </a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Healthy Living</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!" className="dark-grey-text">
                Nutrients
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Fitness
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Healthy Recipes
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
               Experts
              </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
         SOUL CODERS
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
    <section id="harsh">
      Hello 
    </section>

      </>

    );
};

export default Home;