import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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

const Columns = ({ columns, columnContainerHeight }) => {
  return (
    <Col id="columns_container">{render(columns, columnContainerHeight)}</Col>
  );
};

export default Columns;
