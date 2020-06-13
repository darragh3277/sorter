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
    <>
      <Button
        type="button"
        className={
          "btn btn-sm btn-light " +
          (displaySidebar === true ? "d-sm-none" : "d-xs-block d-none ")
        }
        onClick={handleToggleSidebar}
      >
        <GiHamburgerMenu id="burger-menu" />
      </Button>
      <Row
        className={
          "py-1 mx-1 mb-2 " + (displaySidebar === true && "d-none d-sm-block")
        }
        id="visualiser_info"
      >
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
          className={displaySidebar === true && "d-none d-sm-inline"}
        >
          <strong>Algoritm:</strong> {algorithm.name}
        </Col>
        <Col className={displaySidebar === true && "d-none d-sm-inline"}>
          <strong>Columns:</strong> {size}
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
