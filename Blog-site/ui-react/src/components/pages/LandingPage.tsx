import React from "react";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import landingpage from "../images/image.png";
import wowlogo from "../images/wowlogo.png";
import "./styles/landingpage.css";


function Landing() {
  return (
    <div>
      <Container fluid>
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div className="landing-body">
                <h1 className="fs-2">
                  <strong>Publishing Platform for professional bloggers</strong>
                </h1>
                <p className="mt-20 ">
                  The first thing you learn when you’re blogging is that people
                  are one click away from leaving you. So you’ve got to get to
                  the point, you can’t waste people’s time, you’ve got to give
                  them some value for their limited attention span
                </p>
                <Button className="get-started-btn">
                  Get Started
                </Button>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <img className="landing-image" src={landingpage}></img>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Landing;
