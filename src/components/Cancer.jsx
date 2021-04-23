import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, NavDropdown , Nav,  Form } from "react-bootstrap";

import cancer from "../images/cancer.jpg";

const Cancer = () => {
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
              {/* <Nav.Link href="/Cancer">Cancer</Nav.Link> */}
              <NavDropdown
                title="Cancer "
                className="dropdown"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/Heart">Heart Disease</NavDropdown.Item>
                <NavDropdown.Item href="/Malaria">
                 Malaria
                </NavDropdown.Item>
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
      <div>
      <img
      id="cancer-img"
      className="disease-img"
      src={cancer}
      alt="logo"
      />
          <p className="disease-content">
        Cancer is a fatal illness often caused by genetic disorder aggregation
        and a variety of pathological changes. Cancerous cells are abnormal
        areas often growing in any part of human body that are life-threatening.
        Cancer also known as tumor must be quickly and correctly detected in the
        initial stage to identify what might be beneficial for its cure. Even
        though modality has different considerations, such as complicated
        history, improper diagnostics and treatement that are main causes of
        deaths. The aim of the research is to analyze, review, categorize and
        address the current developments of human body cancer detection using
        machine learning techniques for breast, brain, lung, liver, skin cancer
        leukemia. The study highlights how cancer diagnosis, cure process is
        assisted using machine learning with supervised, unsupervised and deep
        learning techniques. Several state of art techniques are categorized
        under the same cluster and results are compared on benchmark datasets
        from accuracy, sensitivity, specificity, false-positive metrics.
        Finally, challenges are also highlighted for possible future work.
        </p>
      </div>
    </div>
  );
};

export default Cancer;
