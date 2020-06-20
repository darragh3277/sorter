import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import "./Sorter.css";
import Visualiser from "./components/visualiser/Visualiser";
import GenerateColumns from "./algorithms/GenerateColumns";
import BubbleSort from "./algorithms/BubbleSort";
import MergeSort from "./algorithms/MergeSort";
import QuickSort from "./algorithms/QuickSort";
import HeapSort from "./algorithms/HeapSort";

//time in ms
//very rough as time to update state
//is not taken into account
const animationDuration = 10000;

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
      showColumnWarning: false,
      displaySidebar: false,
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
        break;
      case "quick_sort":
        sorter = new QuickSort(this.state.columns);
        break;
      case "merge_sort":
        sorter = new MergeSort(this.state.columns);
        break;
      case "heap_sort":
        sorter = new HeapSort(this.state.columns);
        break;
      default:
        return false;
    }
    this.setState({ sorting: true, displaySidebar: false });
    sorter.getHistory().then((history) => {
      let steps = history.length;
      if (history.length > 0) this.handleUpdateVisual(history.shift());
      if (history.length > 0) {
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
      } else {
        this.setState({
          compareValues: [],
          moveValues: [],
          sorting: false,
        });
      }
    });
  };

  handleSizeChange = (e) => {
    let size = parseInt(e.target.value);
    if (!isNaN(size) && size >= 1 && size <= 100) {
      let columns = new GenerateColumns(size).getColumns();
      this.setState({
        showColumnWarning: false,
        size,
        columns,
      });
    } else {
      this.setState({
        showColumnWarning: true,
      });
      setTimeout(() => {
        this.setState({
          showColumnWarning: false,
        });
      }, 3000);
    }
  };

  handleAlgorithmChange = (e) => {
    let index = e.target.selectedIndex;
    let name = e.target[index].text;
    this.setState({
      algorithm: { key: e.target.value, name: name },
    });
  };

  handleToggleSidebar = () => {
    this.setState({
      displaySidebar: !this.state.displaySidebar,
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
      <div className="wrapper" id="sorter_container">
        <Sidebar
          handleSort={this.handleSort}
          handleSizeChange={this.handleSizeChange}
          handleAlgorithmChange={this.handleAlgorithmChange}
          size={this.state.size}
          sorting={this.state.sorting}
          showColumnWarning={this.state.showColumnWarning}
          displaySidebar={this.state.displaySidebar}
        />
        <Visualiser
          algorithm={this.state.algorithm}
          size={this.state.size}
          columns={this.state.columns}
          columnContainerHeight={this.state.columnContainerHeight}
          compareValues={this.state.compareValues}
          moveValues={this.state.moveValues}
          displaySidebar={this.state.displaySidebar}
          handleToggleSidebar={this.handleToggleSidebar}
        />
      </div>
    );
  }
}

export default Sorter;
