import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, NavDropdown, Nav,  Form } from "react-bootstrap";

import diabeties from "../images/daibetes.jpg";

const Diabeties = () => {
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
             
              <NavDropdown
                title="Diabeties"
                className="dropdown"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/Cancer">Cancer</NavDropdown.Item>
                <NavDropdown.Item href="/Malaria">
                 Malaria
                </NavDropdown.Item>
                <NavDropdown.Item href="/Heart">Heart disease</NavDropdown.Item>
               
              </NavDropdown>
              <NavDropdown
                title="Healthy Living"
                className="dropdown"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.2">Fitness</NavDropdown.Item>
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
      <div>
      <img
      className="disease-img"
      src={diabeties}
      alt="logo"
    />
          <p className="disease-content">
          Diabetes mellitus, commonly known as diabetes, is a metabolic disease that causes high blood sugar. The hormone insulin moves sugar from the blood into your cells to be stored or used for energy. With diabetes, your body either doesn’t make enough insulin or can’t effectively use the insulin it does make.Untreated high blood sugar from diabetes can damage your nerves, eyes, kidneys, and other organs.There are a few different types of diabetes:
Type 1 diabetes is an autoimmune disease. The immune system attacks and destroys cells in the pancreas, where insulin is made. It’s unclear what causes this attack. About 10 percent of people with diabetes have this type.
Type 2 diabetes occurs when your body becomes resistant to insulin, and sugar builds up in your blood.
Prediabetes occurs when your blood sugar is higher than normal, but it’s not high enough for a diagnosis of type 2 diabetes.
Gestational diabetes is high blood sugar during pregnancy. Insulin-blocking hormones produced by the placenta cause this type of diabetes.
A rare condition called diabetes insipidus is not related to diabetes mellitus, although it has a similar name. It’s a different condition in which your kidneys remove too much fluid from your body.
        </p>
      </div>
    </div>
  );
};

export default Diabeties;
