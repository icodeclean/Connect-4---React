class Cell extends React.Component {
  cellClass(cellValue) {
    if (cellValue == 'b') {
      return 'blueCoin'
    } else if (cellValue == 'y') {
      return 'yellowCoin'
    } else {
      return;
    }
  }
  render() {
    return (
      <div className={"cell " + (this.cellClass(this.props.cellValue) || 'empty')} onClick={() => this.props.onClick()}></div>
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
      blueIsNext: true,
      AI: false,
    };
  }

  componentDidUpdate() {
    if ((!this.state.blueIsNext) && (this.state.AI)){
      this.dropInColumn(this.computerPlay());
    }
  }

  winningString(string) {
    if (string.includes('bbbb') || string.includes('yyyy')) {
      return true;
    }
  }

  calculateWinner(grid) {
    if (this.winHorizontal(grid) || this.winVertical(grid) || this.winDiagonal(grid)) {
      return true;
    }
    else {
      return false;
    }
  }

  winVertical(grid) {
    for (var c = 0; c < 7; c++) {
      let column = '';
      for( var r = 0; r < 6; r++) {
        column += grid[r][c];
      }
      if (this.winningString(column)) {
        return true;
      }
    }
    return false;
  }

  winHorizontal(grid) {
    for( var i = 5; i > -1; i--) {
      let row ='';
      grid[i].map(function(x) {row += x;});
      if (this.winningString(row)) {
        return true;
      }
    } 
    return false;
  }

  winDiagonal(grid) {

    var diagonal1 = '';
    for (var r = 2; r < 6 ; r ++) {
      diagonal1 += grid[r][r-2];
    }

    var diagonal2 = '';
    for (var r = 1; r < 6 ; r ++) {
      diagonal2 += grid[r][r-1];
    }

    var diagonal3 = '';
    for (var r = 0; r < 6 ; r ++) {
      diagonal3 += grid[r][r];
    }

    var diagonal4 = '';
    for (var r = 0; r < 6 ; r ++) {
      diagonal4 += grid[r][r+1];
    }

    var diagonal5 = '';
    for (var r = 0; r < 5 ; r ++) {
      diagonal5 += grid[r][r+2];
    }

    var diagonal6 = '';
    for (var r = 0; r < 4 ; r ++) {
      diagonal6 += grid[r][r+3];
    }

    var diagonal7 = '';
    for (var r = 3, c = 0; r > -1 ; r--, c++) {
      diagonal7 += grid[r][c];
    }

    var diagonal8 = '';
    for (var r = 4, c = 0; r > -1 ; r--, c++) {
      diagonal8 += grid[r][c];
    }

    var diagonal9 = '';
    for (var r = 5, c = 0; r > -1 ; r--, c++) {
      diagonal9 += grid[r][c];
    }

    var diagonal10 = '';
    for (var r = 5, c = 1; r > -1 ; r--, c++) {
      diagonal10 += grid[r][c];
    }

    var diagonal11 = '';
    for (var r = 5, c = 2; r > 0 ; r--, c++) {
      diagonal11 += grid[r][c];
    }

    var diagonal12 = '';
    for (var r = 5, c = 3; r > 1 ; r--, c++) {
      diagonal12 += grid[r][c];
    }

    if ((this.winningString(diagonal1))  ||
       (this.winningString(diagonal2))   ||
       (this.winningString(diagonal3))   ||
       (this.winningString(diagonal4))   ||
       (this.winningString(diagonal5))   ||
       (this.winningString(diagonal6))   ||
       (this.winningString(diagonal7))   ||
       (this.winningString(diagonal8))   ||
       (this.winningString(diagonal9))   ||
       (this.winningString(diagonal10))  ||
       (this.winningString(diagonal11))  ||
       (this.winningString(diagonal12)))  {
       return true;
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
      grid[i][col] = this.state.blueIsNext ? 'b' : 'y';
      this.setState({ 
        grid: grid,
        blueIsNext: !this.state.blueIsNext,
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
    status = 'Winner is ' + (!(this.state.blueIsNext) ? "Blue!" : "Yellow!");
    statusColor = (!(this.state.blueIsNext) ? 'b' : 'y');
  } else {
    status = (this.state.blueIsNext ? "Blue's Turn" : "Yellow's Turn");
    statusColor = (this.state.blueIsNext ? 'b' : 'y');
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
      <div className="dashboard">
        <button className="button" onClick={() => this.toggleAI()}>{this.state.AI ? 'Play vs Human' : 'Play vs Computer'}</button>
        <div className={"status "+ statusColor}>{status}</div>
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