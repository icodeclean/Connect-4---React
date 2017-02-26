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

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      grid: [
              [null, null, null, null, null, null, null],
              [null, null, 'y', null, null, null, null],
              [null, null, null, null, null, null, null],
              ['r', null, null, null, 'y', null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, 'r', null],
      ]
    };
  }

renderCell(col, row) {
  return <Cell cellValue={this.state.grid[row][col]}  />
}
  render() {
    return (
      <div className="board">
        <div className="column">
          {this.renderCell(0, 0)}
          {this.renderCell(0, 1)}
          {this.renderCell(0, 2)}
          {this.renderCell(0, 3)}
          {this.renderCell(0, 4)}
          {this.renderCell(0, 5)}
        </div>

        <div className="column">
          {this.renderCell(1, 0)}
          {this.renderCell(1, 1)}
          {this.renderCell(1, 2)}
          {this.renderCell(1, 3)}
          {this.renderCell(1, 4)}
          {this.renderCell(1, 5)}
        </div>

        <div className="column">
          {this.renderCell(2, 0)}
          {this.renderCell(2, 1)}
          {this.renderCell(2, 2)}
          {this.renderCell(2, 3)}
          {this.renderCell(2, 4)}
          {this.renderCell(2, 5)}
        </div>

        <div className="column">
          {this.renderCell(3, 0)}
          {this.renderCell(3, 1)}
          {this.renderCell(3, 2)}
          {this.renderCell(3, 3)}
          {this.renderCell(3, 4)}
          {this.renderCell(3, 5)}
        </div>

        <div className="column">
          {this.renderCell(4, 0)}
          {this.renderCell(4, 1)}
          {this.renderCell(4, 2)}
          {this.renderCell(4, 3)}
          {this.renderCell(4, 4)}
          {this.renderCell(4, 5)}
        </div>

        <div className="column">
          {this.renderCell(5, 0)}
          {this.renderCell(5, 1)}
          {this.renderCell(5, 2)}
          {this.renderCell(5, 3)}
          {this.renderCell(5, 4)}
          {this.renderCell(5, 5)}
        </div>

        <div className="column">
          {this.renderCell(6, 0)}
          {this.renderCell(6, 1)}
          {this.renderCell(6, 2)}
          {this.renderCell(6, 3)}
          {this.renderCell(6, 4)}
          {this.renderCell(6, 5)}
        </div>
      </div>
      
    );
  }
};
// =======================================

ReactDOM.render(
  <Board cellValue="null"/>,
  document.getElementById('container')
);