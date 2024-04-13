import { BoardInterface } from "../constants/board";

function isWinningLine(line: BoardInterface[]): number {
  const firstPlayer = line[0].player;
  if (firstPlayer !== 0 && line.every((cell) => cell.player === firstPlayer)) {
    return firstPlayer;
  }
  return 0;
}

function checkRow(board: BoardInterface[][], row: number): number {
  return isWinningLine(board[row]);
}

function checkColumn(board: BoardInterface[][], column: number): number {
  const columnCells = board.map((row) => row[column]);
  return isWinningLine(columnCells);
}

function checkDiagonals(board: BoardInterface[][]): number {
  const diagonal1 = [board[0][0], board[1][1], board[2][2]];
  const diagonal2 = [board[0][2], board[1][1], board[2][0]];

  const diagonal1Winner = isWinningLine(diagonal1);
  if (diagonal1Winner !== 0) {
    return diagonal1Winner;
  }

  return isWinningLine(diagonal2);
}

export function ValidateWin(board: BoardInterface[][]): number {
  for (let i = 0; i < 3; i++) {
    const rowResult = checkRow(board, i);
    if (rowResult !== 0) {
      return rowResult;
    }

    const columnResult = checkColumn(board, i);
    if (columnResult !== 0) {
      return columnResult;
    }
  }

  return checkDiagonals(board);
}
