import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Sorter.css";
import Visualiser from "./components/visualiser/Visualiser";
import GenerateColumns from "./algorithms/GenerateColumns";
import BubbleSort from "./algorithms/BubbleSort";
import MergeSort from "./algorithms/MergeSort";

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
      sorting: false,
      swapping: false,
    };
  }

  runSorter = (sorter) => {
    if (sorter.getIsSorted() === true) {
      this.setState({
        currentIndex: null,
        compareIndex: null,
        sorting: false,
      });
      return true;
    }
    this.setState({
      currentIndex: sorter.getCurrentIndex(),
      compareIndex: sorter.getCompareIndex(),
      sorting: true,
    });
    if (sorter.compare()) {
      setTimeout(() => {
        this.setState({
          swapping: true,
        });
        setTimeout(() => {
          sorter.swap();
          this.setState({
            columns: sorter.getColumns(),
            swapping: false,
          });
          sorter.step();
          setTimeout(() => {
            this.runSorter(sorter);
          }, sorter.getCompareSpeed());
        }, sorter.getSwapSpeed());
      }, sorter.getCompareSpeed());
    } else {
      sorter.step();
      setTimeout(() => {
        this.runSorter(sorter);
      }, sorter.getCompareSpeed());
    }
  };

  handleUpdateVisual = (
    columns,
    currentIndex,
    compareIndex,
    sorting,
    swapping
  ) => {
    this.setState({
      columns,
      currentIndex,
      compareIndex,
      sorting,
      swapping,
    });
  };

  handleSort = (e) => {
    e.preventDefault();
    let algorithm = e.target.algorithm.value;
    let sorter;
    switch (algorithm) {
      case "bubble_sort":
        sorter = new BubbleSort(this.state.columns);
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
    sorter.sort().then((steps) => {
      if (steps.length > 0) console.log(steps.pop());
      let update = setInterval(() => {
        console.log(steps.pop());
        if (steps.length === 0) clearInterval(update);
      }, 1000);
    });
    // let sorted = new Promise((resolve) => {
    //   resolve(sorter.sort());
    // });
    // sorted.then(() => {
    //   let update = setInterval(() => {
    //     console.log(sorter.stateChanges.pop());
    //     if (sorter.stateChanges.length === 0) clearInterval(update);
    //   }, 1000);
    // });
    // sorter.sort().then(() => {
    //   let update = setInterval(() => {
    //     console.log(sorter.stateChanges.pop());
    //     if (sorter.stateChanges.length === 0) clearInterval(update);
    //   }, 1000);
    // });
    //this.runSorter(sorter);
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
            sorting={this.state.sorting}
          />
          <Visualiser
            algorithm={this.state.algorithm}
            size={this.state.size}
            columns={this.state.columns}
            columnContainerHeight={this.state.columnContainerHeight}
            currentIndex={this.state.currentIndex}
            compareIndex={this.state.compareIndex}
            swapping={this.state.swapping}
          />
        </Row>
      </Container>
    );
  }
}

export default Sorter;
