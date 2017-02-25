class Cell extends React.Component {

  cellClass(cellValue) {
    if (cellValue == 'r') {
      return 'redCoin'
    } else if (cellValue == 'y') {
      return 'yellowCoin'
    } else {
      return 
    }
  }

  render() {
    return (
      <div className={"cell " + this.cellClass(this.props.cellValue)}></div>
    );
  }
};


// =======================================

ReactDOM.render(
  <Cell cellValue="null"/>,
  document.getElementById('container')
);