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
      columns: [],
      algorithm: "quicksort",
      columnContainerHeight: null,
    };
  }

  componentDidMount() {
    let height = document.getElementById("column_container").offsetHeight;
    this.setState({
      columnContainerHeight: height,
      columns: [1, 20, 3, 23, 100],
    });
  }

  render() {
    return (
      <Container fluid id="sorter_container">
        <Row id="sorter_wrapper">
          <Sidebar />
          <Visualiser
            algorithm={this.state.algorithm}
            columns={this.state.columns}
            columnContainerHeight={this.state.columnContainerHeight}
          />
        </Row>
      </Container>
    );
  }
}

export default Sorter;
