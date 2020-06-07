import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Dashboard.css";

const Dashboard = ({ algorithm, size }) => {
  return (
    <Row className="p-2 mb-2" id="visualiser_info">
      <Col xs={1}>
        <GiHamburgerMenu id="burger-menu" />
      </Col>
      <Col xs={6} md={5} lg={4} xl={3}>
        <strong>Algoritm:</strong> {algorithm.name}
      </Col>
      <Col>
        <strong>Columns:</strong> {size}
      </Col>
    </Row>
  );
};

export default Dashboard;
