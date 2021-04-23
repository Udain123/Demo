import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
// import Formdata from "form-data";
import { Button, Navbar,Row, Col, NavDropdown, Nav,  Form } from "react-bootstrap";

import heart from "../images/heart.jpg";

export const Heart = () => {
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [cp, setCp] = useState();
  const [trestbps, setTrestbps] = useState();
  const [chol, setChol] = useState();
  const [fbs, setFbs] = useState();
  const [restecg, setRestecg] = useState();
  const [thalach, setThalach] = useState();
  const [exang, setExang] = useState();
  const [oldpeak, setOldpeak] = useState();
  const [slope, setSlope] = useState();
  const [ca, setCa] = useState();
  const [thal, setThal] = useState();
  const [result, setResult] = useState([]);
  const [loading, isLoading] = useState(false);
  
  const submit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("age", parseInt(age));
    formdata.append("gender", parseInt(gender));
    formdata.append("cp", parseInt(cp));
    formdata.append("trestbps", parseInt(trestbps));
    formdata.append("chol", parseInt(chol));
    formdata.append("fbs", parseInt(fbs));
    formdata.append("restecg", parseInt(restecg));
    formdata.append("thalach", parseInt(thalach));
    formdata.append("exang", parseInt(exang));
    formdata.append("oldpeak", parseInt(oldpeak));
    formdata.append("slope", parseInt(slope));
    formdata.append("ca", parseInt(ca));
    formdata.append("thal", parseInt(thal));
    console.log(formdata, "hello");
    await axios
      .post("https://hearthealthclub.herokuapp.com/predict", formdata)
      .then((res) => {
        setResult(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err));
    
  };
  

 
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
                title="Heart Disease "
                className="dropdown"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/Cancer">Cancer</NavDropdown.Item>
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
      <div >
          <img
            className="disease-img"
            src={heart}
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
      <div className="heart-form">
            <h2>Heart Disease Prediction</h2>
            <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="2">
            Age
          </Form.Label>
          <Col sm="10">
            <Form.Control onChange={(e) => setAge(e.target.value)} name="age" placeholder="What's your age?" value={age} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="2">
            Gender
          </Form.Label>
          <Col sm="10">
            <Form.Control onChange={(e) => setGender(e.target.value)} name="gender" type="text" placeholder="What's your gender?" value={gender} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
          CP
          </Form.Label>
          <Col sm="10">
            <Form.Control onChange={(e) => setCp(e.target.value)} name="CP" type="text" placeholder="What's your CP?" value={cp} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Trestbps
          </Form.Label>
          <Col sm="10">
            <Form.Control onChange={(e) => setTrestbps(e.target.value)} name="Trestbps" type="text" placeholder="What's your Trestbps?" value={trestbps} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Chol
          </Form.Label>
          <Col sm="10">
            <Form.Control  onChange={(e) => setChol(e.target.value)} name="Chol" type="text" placeholder="What's your Chol?" value={chol}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
          FBS
          </Form.Label>
          <Col sm="10">
            <Form.Control  onChange={(e) => setFbs(e.target.value)} name="FBS" type="text" placeholder="What's your FBS?" value={fbs} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            RestECG
          </Form.Label>
          <Col sm="10">
            <Form.Control  onChange={(e) => setRestecg(e.target.value)} name="RestECG" type="text" placeholder="What's your  RestECG?" value={restecg} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Thalach
          </Form.Label>
          <Col sm="10">
            <Form.Control  onChange={(e) => setThalach(e.target.value)} name="Thalach" type="text" placeholder="What's your  Thalach?" value={thalach}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
          Exang
          </Form.Label>
          <Col sm="10">
            <Form.Control onChange={(e) => setExang(e.target.value)} name="Exang" type="text" placeholder="What's your Exang?" value={exang}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
          OldPeak
          </Form.Label>
          <Col sm="10">
            <Form.Control  onChange={(e) => setOldpeak(e.target.value)} name="OldPeak" type="text" placeholder="What's your OldPeak?" value={oldpeak} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
          Slope
          </Form.Label>
          <Col sm="10">
            <Form.Control onChange={(e) => setSlope(e.target.value)} name="Slope" type="text" placeholder="What's your Slope?" value={slope} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
          CA
          </Form.Label>
          <Col sm="10">
            <Form.Control onChange={(e) => setCa(e.target.value)} name="CA" type="text" placeholder="What's your CA?" value={ca} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Thal
          </Form.Label>
          <Col sm="10">
            <Form.Control onChange={(e) => setThal(e.target.value)} name="Thal" type="text" placeholder="What's your Thal?" value={thal}/>
          </Col>
        </Form.Group>

        <button onClick={submit}>Submit</button>
      </div>
      
      <h1>{result["Prediction"]}</h1>
      
    </div>
  );
};


export default Heart;



//   const runPred = async (age,gender,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal) => {
//    const res = await axios.post("https://hearthealthclub.herokuapp.com/predict", {
//     age,
//     gender,
//     cp,
//     trestbps,
//     chol,
//     fbs,
//     restecg,
//     thalach,
//     exang,
//     oldpeak,
//     slope,
//     ca,
//     thal
//  });

//    try{
//     console.log(res);
//    }
//    catch(error){
//     alert(error.message)
//    }
//  }
// .catch(error => alert(error.message));






{/* <div className="heart-form">
          <form onSubmit="submit">
            <label>Age</label>
            <input onChange={(e) => setAge(e.target.value)} name="age" placeholder="What's your age?" value={age} />
            <label>Gender</label>
            <input onChange={(e) => setGender(e.target.value)} name="gender" type="text" placeholder="What's your gender?" value={gender} />
            <label>CP</label>
            <input onChange={(e) => setCp(e.target.value)} name="CP" type="text" placeholder="What's your CP?" value={cp} />
            <label>TrestBps</label>
            <input onChange={(e) => setTrestbps(e.target.value)} name="Trestbps" type="text" placeholder="What's your Trestbps?" value={trestbps} />
            <label>Chol</label>
            <input onChange={(e) => setChol(e.target.value)} name="Chol" type="text" placeholder="What's your Chol?" value={chol} />
            <label>FBS</label>
            <input onChange={(e) => setFbs(e.target.value)} name="FBS" type="text" placeholder="What's your FBS?" value={fbs} />
            <label>RestECG</label>
            <input onChange={(e) => setRestecg(e.target.value)} name="RestECG" type="text" placeholder="What's your  RestECG?" value={restecg} />
            <label>Thalach</label>
            <input onChange={(e) => setThalach(e.target.value)} name="Thalach" type="text" placeholder="What's your  Thalach?" value={thalach} />
            <label>Exang</label>
            <input onChange={(e) => setExang(e.target.value)} name="Exang" type="text" placeholder="What's your Exang?" value={exang} />
            <label>OldPeak</label>
            <input onChange={(e) => setOldpeak(e.target.value)} name="OldPeak" type="text" placeholder="What's your OldPeak?" value={oldpeak} />
            <label>Slope</label>
            <input onChange={(e) => setSlope(e.target.value)} name="Slope" type="text" placeholder="What's your Slope?" value={slope} />
            <label>CA</label>
            <input onChange={(e) => setCa(e.target.value)} name="CA" type="text" placeholder="What's your CA?" value={ca} />
            <label>Thal</label>
            <input onChange={(e) => setThal(e.target.value)} name="Thal" type="text" placeholder="What's your Thal?" value={thal} />
            <button type="submit">Predict</button>
          
          </form>
      </div> */}