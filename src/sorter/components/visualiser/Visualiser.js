import React from "react";
import Col from "react-bootstrap/Col";
import Dashboard from "../dashboard/Dashboard";
import Columns from "../columns/Columns";
import "./Visualiser.css";

const Visualiser = ({
  algorithm,
  columns,
  size,
  columnContainerHeight,
  compareValues,
  moveValues,
  handleToggleSidebar,
  displaySidebar,
}) => {
  return (
    <Col className="mt-2" id="visualiser_container">
      <Dashboard
        algorithm={algorithm}
        size={size}
        handleToggleSidebar={handleToggleSidebar}
        displaySidebar={displaySidebar}
      />
      <Columns
        columns={columns}
        columnContainerHeight={columnContainerHeight}
        compareValues={compareValues}
        moveValues={moveValues}
      />
    </Col>
  );
};
export default Visualiser;
