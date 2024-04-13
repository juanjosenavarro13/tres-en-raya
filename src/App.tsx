import styles from "./app.module.css";
import { Cell } from "./components/cell/cell";
import { useCreateBoard } from "./hooks/useCreateBoard";
function App() {
  const { cells, shift, handleClick, reset } = useCreateBoard();
  return (
    <main className={styles.main}>
      <h1>
        Tres en Raya{" "}
        <b style={{ color: shift === 1 ? "blue" : "red" }}>
          [{shift === 1 ? "X" : "O"}]
        </b>
      </h1>
      <div className={styles.board}>
        {cells.map((columnArray, column) => {
          return columnArray.map((rowArray, row) => {
            return (
              <Cell
                key={column + "-" + row}
                player={rowArray.player}
                onClick={() => {
                  handleClick(shift, { column, row });
                }}
              />
            );
          });
        })}
      </div>

      <button
        className={styles.reset}
        onClick={() => {
          reset();
        }}
      >
        Reiniciar
      </button>
    </main>
  );
}

export default App;
