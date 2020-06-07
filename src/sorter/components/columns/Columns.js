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

const render = (
  columns,
  columnContainerHeight,
  currentIndex,
  compareIndex,
  swapping
) =>
  columns.map((col, i) => {
    let width = col * 0.95;
    let height = (columnContainerHeight - columns.length) / columns.length;
    let useVariableHeight = height < 17;
    height = useVariableHeight ? height + "px" : "1rem";
    console.log(i + " " + currentIndex + " " + compareIndex);
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
        columnContainerHeight,
        currentIndex,
        compareIndex,
        swapping
      )}
    </Col>
  );
};

export default Columns;
