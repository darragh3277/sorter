import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Sorter.css";
import Visualiser from "./components/visualiser/Visualiser";
import GenerateColumns from "./algorithms/GenerateColumns";
import BubbleSort from "./algorithms/BubbleSort";

class Sorter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 10,
      columns: [],
      algorithm: { key: "bubble_sort", name: "Bubble Sort" },
      columnContainerHeight: null,
      currentIndex: null,
      compareIndex: null,
    };
  }

  handleSort = (e) => {
    e.preventDefault();
    let algorithm = e.target.algorithm.value;
    let sorter;
    switch (algorithm) {
      case "bubble_sort":
        sorter = new BubbleSort(this.state.columns);
        break;
      case "quick_sort":
        console.log("running ssort");
        break;
      default:
        return false;
    }
    let interval = setInterval(() => {
      this.setState({
        currentIndex: this.state.currentIndex,
        compareIndex: this.state.compareIndex,
      });
      let columns = sorter.step();
      this.setState({
        columns,
      });
      if (sorter.getIsSorted === true) clearInterval(interval);
    }, 300);
  };

  handleSizeChange = (e) => {
    let size = parseInt(e.target.value);
    if (!isNaN(size) && size >= 1 && size <= 100) {
      let arr = new GenerateColumns(size);
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
    let arr = new GenerateColumns(this.state.size);
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
