import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Dashboard = ({ algorithm, size }) => {
  return (
    <Row className="p-2 mb-2" id="visualiser_info">
      <Col xs={6} md={4} lg={3} xl={2}>
        Algoritm: {algorithm}
      </Col>
      <Col>Columns: {size}</Col>
    </Row>
  );
};

export default Dashboard;
