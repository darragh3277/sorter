import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsFillBarChartFill } from "react-icons/bs";
import "./Sidebar.css";

const Sidebar = ({
  handleSort,
  size,
  handleSizeChange,
  handleAlgorithmChange,
}) => {
  return (
    <Col className="sidebar d-none d-sm-block pt-3" xs={1} sm={4} md={3} lg={2}>
      <h1 className="logo text-center">
        <BsFillBarChartFill className="logo-icon" />
        SORTER
      </h1>
      <hr />
      <form onSubmit={handleSort}>
        <div className="form-group">
          <label htmlFor="algorithm">Algorithm</label>
          <select
            className="form-control"
            name="algorithm"
            id="algorithm"
            onChange={handleAlgorithmChange}
          >
            <option value="bubble_sort">Bubble Sort</option>
            <option value="quick_sort">Quick Sort</option>
          </select>
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="columns">Columns</label>
          <input
            className="form-control"
            type="number"
            min="1"
            max="100"
            id="columns"
            name="columns"
            onChange={handleSizeChange}
            value={size}
          />
        </div>
        <hr />
        <div className="text-center pt-3">
          <Button type="submit" className="btn btn-block btn-light">
            Sort
          </Button>
        </div>
      </form>
    </Col>
  );
};
export default Sidebar;
