import { constants } from "./constants/constants";

interface MatrixPosition {
  row: number;
  col: number;
}

interface VisualPosition {
  x: number;
  y: number;
}

/* export function isSolvable(tiles: number[]): boolean {
  let product: number = 1;
  for (let i = 1, l = constants.TILE_COUNT - 1; i <= l; i++) {
    for (let j = i + 1, m = l + 1; j <= m; j++) {
      product *= (tiles[i - 1] - tiles[j - 1]) / (i - j);
    }
  }
  return Math.round(product) === 1;
} */

export function isSolvable(tiles: number[]): boolean {
  let invCount = 0;
  for (let i = 0; i < constants.TILE_COUNT - 1; i++) {
    for (let j = i + 1; j < constants.TILE_COUNT; j++) {
      if (tiles[j] && tiles[i] && tiles[i] > tiles[j]) {
        invCount++;
      }
    }
  }
  return invCount % 2 === 0;
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
  return parseInt(row, 10) * constants.GRID_SIZE + parseInt(col, 10);
}

export function getMatrixPosition(index: number): MatrixPosition {
  return {
    row: Math.floor(index / constants.GRID_SIZE),
    col: index % constants.GRID_SIZE,
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

/* export function shuffle(tiles: number[]): number[] {
  const shuffledTiles = [
    ...tiles
      .filter((t) => t !== tiles.length - 1)
      .sort(() => Math.random() - 0.5),
    tiles.length - 1,
  ];
  return isSolvable(shuffledTiles) && !isSolved(shuffledTiles)
    ? shuffledTiles
    : shuffle(shuffledTiles);
} */

export function shuffle(tiles: number[]): number[] {
  let array = [...tiles];
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return isSolvable(array) && !isSolved(array) ? array : shuffle(array);
}

export function canSwap(src: number, dest: number) {
  const { row: srcRow, col: srcCol } = getMatrixPosition(src);
  const { row: destRow, col: destCol } = getMatrixPosition(dest);
  return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
}

export function swap(tiles: number[], src: number, dest: number) {
  const tilesResult = [...tiles];
  [tilesResult[src], tilesResult[dest]] = [tilesResult[dest], tilesResult[src]];
  return tilesResult;
}
