import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsFillBarChartFill } from "react-icons/bs";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Col className="sidebar d-none d-sm-block pt-3" xs={1} sm={4} md={3} lg={2}>
      <h1 className="logo text-center">
        <BsFillBarChartFill className="logo-icon" />
        SORTER
      </h1>
      <hr />
      <form>
        <div className="form-group">
          <label for="algorithm">Algorithm</label>
          <select className="form-control" id="algorithm">
            <option value="bubble_sort">Bubble Sort</option>
          </select>
        </div>
        <hr />
        <div className="form-group">
          <label for="columns">Columns</label>
          <input
            className="form-control"
            type="number"
            min="1"
            max="100"
            id="columns"
            placeholder="1"
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
