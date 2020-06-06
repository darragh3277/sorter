import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Sorter.css";
import Visualiser from "./components/visualiser/Visualiser";

class Sorter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        1,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
        20,
        35,
        3,
        23,
        100,
      ],
      algorithm: "quicksort",
    };
  }

  render() {
    return (
      <Container fluid id="sorter_container">
        <Row id="sorter_wrapper">
          <Sidebar />
          <Visualiser
            algorithm={this.state.algorithm}
            columns={this.state.columns}
          />
        </Row>
      </Container>
    );
  }
}

export default Sorter;
