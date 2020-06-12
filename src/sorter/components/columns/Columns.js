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
  compareValues,
  moveValues
) =>
  columns.map((col) => {
    let width = col * (95 / columns.length);
    let height = useVariableHeight ? columnHeight + "px" : "1rem";
    let activeClass = compareValues.indexOf(col) === -1 ? "" : "active";
    let moveClass = moveValues.indexOf(col) === -1 ? "" : "move";
    return (
      <Row className="column_container pl-1" key={col}>
        {renderNumbers(col, useVariableHeight)}
        <span
          className={"column " + activeClass + " " + moveClass}
          style={{ width: width + "%", height: height }}
        ></span>
      </Row>
    );
  });

const Columns = ({
  columns,
  columnContainerHeight,
  compareValues,
  moveValues,
}) => {
  return (
    <Col id="columns_container">
      {render(
        columns,
        columnHeight(columns, columnContainerHeight),
        useVariableHeight(columns, columnContainerHeight),
        compareValues,
        moveValues
      )}
    </Col>
  );
};

export default Columns;
