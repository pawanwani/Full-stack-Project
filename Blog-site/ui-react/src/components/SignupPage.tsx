import React, { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogImg from "../images/blogImg.svg";
interface Props {}

export default function SignupPage({}: Props): ReactElement {
  return (
    <div className="bg-c wh-100">
      <Container className="mt-10 bradius img-shadow">
        <Row className="h-600">
          <Col xs={7} className="bg-color blb-blt ">
            <img className="wh-100 blb-blt" src={BlogImg}></img>
          </Col>

          <Col xs={5} className="white borderR">
            <Container></Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
