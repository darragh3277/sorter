import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Dashboard.css";
import Button from "react-bootstrap/Button";

const Dashboard = ({
  algorithm,
  size,
  handleToggleSidebar,
  displaySidebar,
}) => {
  return (
    <Row className="p-2 mb-2" id="visualiser_info">
      <Col className="d-sm-none" xs={2}>
        <Button
          type="button"
          className="btn btn-sm btn-light"
          onClick={handleToggleSidebar}
        >
          <GiHamburgerMenu id="burger-menu" />
        </Button>
      </Col>
      <Col
        xs={6}
        md={5}
        lg={4}
        xl={3}
        className={displaySidebar === true && "hideSmall"}
      >
        <strong>Algoritm:</strong> {algorithm.name}
      </Col>
      <Col className={displaySidebar === true && "hideSmall"}>
        <strong>Columns:</strong> {size}
      </Col>
    </Row>
  );
};

export default Dashboard;
