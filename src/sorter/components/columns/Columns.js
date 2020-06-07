import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Columns.css";

const renderNumbers = (col, useVariableHeight) => {
  if (useVariableHeight === false) {
    return (
      <span className="column_number d-none d-sm-inline text-center">
        {col}
      </span>
    );
  }
};

const useVariableHeight = (columns, columnContainerHeight) => {
  return columnHeight(columns, columnContainerHeight) < 17; //todo
};

const columnHeight = (columns, columnContainerHeight) => {
  return (columnContainerHeight - columns.length) / columns.length;
};

const render = (
  columns,
  columnHeight,
  useVariableHeight,
  currentIndex,
  compareIndex,
  swapping
) =>
  columns.map((col, i) => {
    let width = col * 0.95;
    let height = useVariableHeight ? columnHeight + "px" : "1rem";
    let activeClass = "";
    let swappingClass = "";
    if (i === currentIndex || i === compareIndex) {
      activeClass = "active";
      if (swapping === true) swappingClass = "swapping";
    }
    return (
      <Row className="column_container pl-1" key={col}>
        {renderNumbers(col, useVariableHeight)}
        <span
          className={"column " + activeClass + " " + swappingClass}
          style={{ width: width + "%", height: height }}
        ></span>
      </Row>
    );
  });

const Columns = ({
  columns,
  columnContainerHeight,
  currentIndex,
  compareIndex,
  swapping,
}) => {
  return (
    <Col id="columns_container">
      {render(
        columns,
        columnHeight(columns, columnContainerHeight),
        useVariableHeight(columns, columnContainerHeight),
        currentIndex,
        compareIndex,
        swapping
      )}
    </Col>
  );
};

export default Columns;
