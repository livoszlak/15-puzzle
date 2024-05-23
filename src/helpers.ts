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
  return parseInt(row, 10) * constants.COLUMNS + parseInt(col, 10);
}

export function getMatrixPosition(index: number): MatrixPosition {
  return {
    row: Math.floor(index / constants.COLUMNS),
    col: index % constants.COLUMNS,
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

/* export function canSwap(src: number, dest: number) {
  let { row: srcRow, col: srcCol } = getMatrixPosition(src);
  console.log("src:" + src);

  let { row: destRow, col: destCol } = getMatrixPosition(dest);
  console.log("dest:" + dest);

  return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
} */

export const canSwap = (src: number, dest: number): boolean => {
  const srcPos = getMatrixPosition(src);
  const destPos = getMatrixPosition(dest);
  return srcPos.row === destPos.row || srcPos.col === destPos.col;
};

export function swap(tiles: number[], src: number, dest: number): number[] {
  const srcPos: MatrixPosition = getMatrixPosition(src);
  const destPos: MatrixPosition = getMatrixPosition(dest);
  const emptyTile = tiles.indexOf(constants.TILE_COUNT - 1);
  const emptyPos = getMatrixPosition(emptyTile);

  const tilesResult = [...tiles];

  if (srcPos.row === emptyPos.row) {
    const direction = srcPos.col < emptyPos.col ? 1 : -1;
    for (let i = emptyPos.col; i !== srcPos.col; i -= direction) {
      const index = emptyPos.row * constants.COLUMNS + i;
      const nextIndex = emptyPos.row * constants.COLUMNS + (i - direction);
      tilesResult[index] = tilesResult[nextIndex];
    }
    tilesResult[emptyPos.row * constants.COLUMNS + srcPos.col] =
      constants.TILE_COUNT - 1;
  } else if (srcPos.col === emptyPos.col) {
    const direction = srcPos.row < emptyPos.row ? 1 : -1;
    for (let i = emptyPos.row; i !== srcPos.row; i -= direction) {
      const index = i * constants.COLUMNS + emptyPos.col;
      const nextIndex = (i - direction) * constants.COLUMNS + emptyPos.col;
      tilesResult[index] = tilesResult[nextIndex];
    }
    tilesResult[srcPos.row * constants.COLUMNS + emptyPos.col] =
      constants.TILE_COUNT - 1;
  }

  return tilesResult;
}
