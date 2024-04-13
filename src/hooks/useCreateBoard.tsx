import { useState } from "react";
import { BoardInterface, INITIALBOARD } from "../constants/board";
import { ValidateWin } from "../utils/validateWin";

export function useCreateBoard() {
  const [shift, setShift] = useState<1 | 2>(1);
  const [cells, setCells] = useState<BoardInterface[][]>(INITIALBOARD);

  const handleClick = (
    player: 1 | 2,
    position: { column: number; row: number }
  ) => {
    if (cells[position.column][position.row].player !== 0) return;

    const updatedCells = [...cells];
    updatedCells[position.column][position.row].player = player;
    setCells(updatedCells);
    setShift((prev) => (prev === 1 ? 2 : 1));

    const winPlayer = ValidateWin(updatedCells);
    if (winPlayer !== 0) {
      alert(`Jugador ${winPlayer} Ha ganado`);
      reset();
    }
  };

  const reset = () => {
    setCells(
      INITIALBOARD.map((row) =>
        row.map(() => {
          return { player: 0 };
        })
      )
    );

    setShift(1);
  };

  return { cells, shift, handleClick, reset };
}
