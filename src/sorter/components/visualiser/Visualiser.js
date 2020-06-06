import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Visualiser.css";
import Dashboard from "../dashboard/Dashboard";

const renderNumbers = (col, useVariableHeight) => {
  if (useVariableHeight === false) {
    return (
      <span className="column_number d-none d-sm-inline text-center">
        {col}
      </span>
    );
  }
};

const render = (columns, columnContainerHeight) =>
  columns.map((col, i) => {
    let width = col * 0.95;
    let height = (columnContainerHeight - columns.length) / columns.length;
    let useVariableHeight = height < 17;
    height = useVariableHeight ? height + "px" : "1rem";
    return (
      <Row className="column_container pl-1" key={i}>
        {renderNumbers(col, useVariableHeight)}
        <span
          className="column"
          style={{ width: width + "%", height: height }}
        ></span>
      </Row>
    );
  });

const Visualiser = ({ algorithm, columns, size, columnContainerHeight }) => {
  return (
    <Col className="m-2" id="visualiser_container">
      <Dashboard algorithm={algorithm} size={size} />
      <Row id="column_container">
        <Col>{render(columns, columnContainerHeight)}</Col>
      </Row>
    </Col>
  );
};
export default Visualiser;
