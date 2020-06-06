import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BsFillBarChartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Col className="sidebar" xs={1} sm={4} md={3} lg={2}>
      <Row className="d-block d-sm-none pt-3 text-center">
        <GiHamburgerMenu id="burger-menu" />
      </Row>
      <Row className="d-none d-sm-block pt-3 text-center">
        <h1 className="logo">
          <BsFillBarChartFill className="logo-icon" />
          <span>SORTER</span>
        </h1>
      </Row>
      <hr className="d-none d-sm-block pl-3" />
      <Row className="d-none d-sm-block pl-3">Array</Row>
      <hr className="d-none d-sm-block pl-3" />
      <Row className="d-none d-sm-block pl-3">Algorithms</Row>
    </Col>
  );
};
export default Sidebar;
