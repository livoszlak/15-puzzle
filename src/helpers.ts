import { TILE_COUNT, GRID_SIZE } from "./constants/constants";

interface MatrixPosition {
  row: number;
  col: number;
}

interface VisualPosition {
  x: number;
  y: number;
}

export function isSolvable(tiles: number[]): boolean {
  let product: number = 1;
  for (let i = 1, l = TILE_COUNT - 1; i <= l; i++) {
    for (let j = i + 1, m = l + 1; j <= m; j++) {
      product *= (tiles[i - 1] - tiles[j - 1]) / (i - j);
    }
  }
  return Math.round(product) === 1;
}

export function isSolved(tiles: number[]): boolean {
  for (let i = 0, l = tiles.length; i < l; i++) {
    if (tiles[i] !== i) {
      return false;
    }
  }
  return true;
}

export function getIndex(row: string, col: string): number {
  return parseInt(row, 10) * GRID_SIZE + parseInt(col, 10);
}

export function getMatrixPosition(index: number): MatrixPosition {
  return {
    row: Math.floor(index / GRID_SIZE),
    col: index % GRID_SIZE,
  };
}

export function getVisualPosition(
  row: number,
  col: number,
  width: number,
  height: number
): VisualPosition {
  return {
    x: col * width,
    y: row * height,
  };
}

export function shuffleTiles(tiles: number[]): number[] {
  const shuffledTiles = [
    ...tiles
      .filter((t) => t !== tiles.length - 1)
      .sort(() => Math.random() - 0.5),
    tiles.length - 1,
  ];
  return isSolvable(shuffledTiles) && !isSolved(shuffledTiles)
    ? shuffledTiles
    : shuffleTiles(shuffledTiles);
}
