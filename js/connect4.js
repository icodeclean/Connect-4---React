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
      <div className={"cell " + this.cellClass(this.props.cellValue)} onClick={() => this.props.onClick()}></div>
    );
  }
};

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      grid: [
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
      ],
      redIsNext: true,
      AI: false,
    };
  }

  componentDidUpdate() {
    if ((!this.state.redIsNext) && (this.state.AI)){
      this.dropInColumn(this.computerPlay());
    }
  }

  calculateWinner(grid) {
    if (this.winHorizontal(grid) || this.winVertical(grid)) {
      return true;
    }
    else {
      return false;
    }
  }

  winVertical(grid) {
    return false;
  }

  winHorizontal(grid) {
    for( var i = 5; i > -1; i--) {
      let row ='';
      grid[i].map(function(x) {row += x;});
      if (row.includes('rrrr') || row.includes('yyyy')) {
        return true;
      }
    } 
    return false;
  }

dropInColumn(col) {
  const grid = this.state.grid.slice();
  const winner = this.calculateWinner(grid);
  if (winner) {
    return;
  }
  for( var i = 5; i > -1; i--) {
    if (grid[i][col] == null){
      grid[i][col] = this.state.redIsNext ? 'r' : 'y';
      this.setState({ 
        grid: grid,
        redIsNext: !this.state.redIsNext,
      });
      return;
    }  
  }
}

computerPlay(){
  const grid = this.state.grid.slice();
  let availableCells = [];
  grid[0].map(function(x, index) { 
    if (x == null){
      availableCells.push(index);
    }
  });
  var comPick = Math.floor(Math.random() * availableCells.length);
    return availableCells[comPick];
}

toggleAI() {
  this.setState({AI: !this.state.AI})
}

renderCell(col, row) {
  return <Cell cellValue={this.state.grid[row][col]} onClick={() => this.dropInColumn(col)}/>
}
  render() {
    const winner = this.calculateWinner(this.state.grid);
    let status;
    let statusColor;
    if (winner) {
      status = 'Winner is ' + (!(this.state.redIsNext) ? "Red!" : "Yellow!");
      statusColor = (!(this.state.redIsNext) ? 'r' : 'y');
    } else {
      status = (this.state.redIsNext ? "Red's Turn" : "Yellow's Turn");
      statusColor = (this.state.redIsNext ? 'r' : 'y');
    }


    return (
      <div className="board">
        <div className="grid">
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
        <div className={"status " + statusColor}>
          <a href="#" onClick={() => this.toggleAI()}>{this.state.AI ? 'Play vs Human' : 'Play vs Computer'}</a>
          <p>{status}</p>
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