import React from "react";
import Col from "react-bootstrap/Col";
import Dashboard from "../dashboard/Dashboard";
import Columns from "../columns/Columns";
import "./Visualiser.css";

const Visualiser = ({ algorithm, columns, size, columnContainerHeight }) => {
  return (
    <Col className="m-2" id="visualiser_container">
      <Dashboard algorithm={algorithm} size={size} />
      <Columns
        columns={columns}
        columnContainerHeight={columnContainerHeight}
      />
    </Col>
  );
};
export default Visualiser;
