import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Visualiser.css";

const render = (columns) =>
  columns.map((col) => {
    let width = col * 0.95;
    return (
      <Row className="mb-1 pl-1" key={col}>
        <span className="column_number d-none d-sm-inline">{col}</span>
        <span
          className="column"
          style={{ width: "" + width + "%", height: "1rem" }}
        ></span>
      </Row>
    );
  });

const Visualiser = ({ algorithm, columns }) => {
  return (
    <Col className="m-3" id="visualiser_container">
      <Row id="visualiser_info">
        Algoritm: {algorithm} | Columns: {columns.length}
      </Row>
      <Row id="column_container">
        <Col>{render(columns)}</Col>
      </Row>
    </Col>
  );
};
export default Visualiser;
