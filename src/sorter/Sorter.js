import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Sorter.css";
import Visualiser from "./components/visualiser/Visualiser";
import GenerateColumns from "./algorithms/GenerateColumns";
import BubbleSort from "./algorithms/BubbleSort";
import MergeSort from "./algorithms/MergeSort";

const animationDuration = 10000; //time in ms

class Sorter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 10,
      columns: [],
      algorithm: { key: "bubble_sort", name: "Bubble Sort" },
      columnContainerHeight: null,
      compareValues: [],
      moveValues: [],
      sorting: false,
    };
  }

  handleUpdateVisual = ([columns, compareValues, moveValues]) => {
    this.setState({
      columns,
      compareValues,
      moveValues,
    });
  };

  handleSort = (e) => {
    e.preventDefault();
    let algorithm = e.target.algorithm.value;
    let sorter;
    switch (algorithm) {
      case "bubble_sort":
        sorter = new BubbleSort(this.state.columns);
        return;
        break;
      case "quick_sort":
        break;
      case "merge_sort":
        sorter = new MergeSort(this.state.columns);
        break;
      case "heap_sort":
        break;
      default:
        return false;
    }
    this.setState({ sorting: true });
    sorter.getHistory().then((history) => {
      let steps = history.length;
      if (history.length > 0) this.handleUpdateVisual(history.shift());
      let update = setInterval(() => {
        this.handleUpdateVisual(history.shift());
        if (history.length === 0) {
          this.setState({
            compareValues: [],
            moveValues: [],
            sorting: false,
          });
          clearInterval(update);
        }
      }, animationDuration / steps);
    });
  };

  handleSizeChange = (e) => {
    let size = parseInt(e.target.value);
    if (!isNaN(size) && size >= 1 && size <= 100) {
      let columns = new GenerateColumns(size).getColumns();
      this.setState({
        size,
        columns,
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
    let columnsContainer = document.getElementById("columns_container");
    let height = columnsContainer ? columnsContainer.offsetHeight : 0;
    let columns = new GenerateColumns(this.state.size);
    this.setState({
      columnContainerHeight: height,
      columns: columns.getColumns(),
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
            sorting={this.state.sorting}
          />
          <Visualiser
            algorithm={this.state.algorithm}
            size={this.state.size}
            columns={this.state.columns}
            columnContainerHeight={this.state.columnContainerHeight}
            compareValues={this.state.compareValues}
            moveValues={this.state.moveValues}
          />
        </Row>
      </Container>
    );
  }
}

export default Sorter;
