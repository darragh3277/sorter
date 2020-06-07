import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Sorter.css";
import Visualiser from "./components/visualiser/Visualiser";
import generate from "./algorithms/generateColumns";

class Sorter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 10,
      columns: [],
      algorithm: { key: "bubble_sort", name: "Bubble Sort" },
      columnContainerHeight: null,
    };
  }

  handleSort = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  handleSizeChange = (e) => {
    let size = parseInt(e.target.value);
    if (!isNaN(size) && size >= 1 && size <= 100) {
      let arr = new generate(size);
      this.setState({
        size,
        columns: arr.getColumns(),
      });
    }
  };

  handleAlgorithmChange = (e) => {
    let index = e.target.selectedIndex;
    let name = e.target[index].text;
    this.setState({
      algorithm: { key: e.target.value, name: name },
    });
  };

  columnContainerHeight = () => {
    let height = document.getElementById("columns_container").offsetHeight;
    this.setState({
      columnContainerHeight: height,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.columnContainerHeight);
    let height = document.getElementById("columns_container").offsetHeight;
    let arr = new generate(this.state.size);
    this.setState({
      columnContainerHeight: height,
      columns: arr.getColumns(),
    });
  }

  render() {
    return (
      <Container fluid id="sorter_container">
        <Row id="sorter_wrapper">
          <Sidebar
            handleSort={this.handleSort}
            handleSizeChange={this.handleSizeChange}
            handleAlgorithmChange={this.handleAlgorithmChange}
            size={this.state.size}
          />
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
