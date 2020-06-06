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
      size: 10,
      columns: [],
      algorithm: "quicksort",
      columnContainerHeight: null,
    };
  }

  columnContainerHeight = () => {
    let height = document.getElementById("columns_container").offsetHeight;
    this.setState({
      columnContainerHeight: height,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.columnContainerHeight);
    let height = document.getElementById("columns_container").offsetHeight;
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
            size={this.state.size}
            columns={this.state.columns}
            columnContainerHeight={this.state.columnContainerHeight}
          />
        </Row>
      </Container>
    );
  }
}

export default Sorter;
