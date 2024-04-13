export interface BoardInterface {
  player: 0 | 1 | 2;
}

export const INITIALBOARD: BoardInterface[][] = [
  [{ player: 0 }, { player: 0 }, { player: 0 }],
  [{ player: 0 }, { player: 0 }, { player: 0 }],
  [{ player: 0 }, { player: 0 }, { player: 0 }],
] as const;
