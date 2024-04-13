import styles from "./cell.module.css";
interface CellProps {
  player: 0 | 1 | 2;
  onClick?: () => void;
}
export function Cell({ player, onClick }: Readonly<CellProps>) {
  const stylesWithPlayer = `${styles.cell} ${
    player === 1 ? styles.player1 : styles.player2
  }`;

  return (
    <button
      className={player !== 0 ? stylesWithPlayer : styles.cell}
      onClick={() => {
        onClick && onClick();
      }}
    ></button>
  );
}
