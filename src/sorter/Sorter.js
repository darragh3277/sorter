import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Sorter() {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col>Content</Col>
      </Row>
    </Container>
  );
}

export default Sorter;
