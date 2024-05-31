import { constants } from "./constants/constants";
import { Constants } from "./types";

interface MatrixPosition {
  row: number;
  col: number;
}

interface VisualPosition {
  x: number;
  y: number;
}

export function isSolvable(tiles: number[], constants: Constants): boolean {
  let invCount = 0;

  for (let i = 0; i < constants.TILE_COUNT - 1; i++) {
    for (let j = i + 1; j < constants.TILE_COUNT; j++) {
      if (tiles[j] && tiles[i] && tiles[i] > tiles[j]) {
        invCount++;
      }
    }
  }

  const blankRow = Math.floor(tiles.indexOf(0) / constants.COLUMNS);

  if (constants.COLUMNS % 2 !== 0) {
    return invCount % 2 === 0;
  } else {
    if (blankRow % 2 === 0) {
      return invCount % 2 !== 0;
    } else {
      return invCount % 2 === 0;
    }
  }
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

export function shuffle(tiles: number[]): number[] {
  let array = [...tiles];
  let currentIndex: number = array.length,
    temporaryValue: number,
    randomIndex: number;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return isSolvable(array, constants) && !isSolved(array)
    ? array
    : shuffle(array);
}

export const canSwap = (src: number, dest: number): boolean => {
  const srcPos = getMatrixPosition(src);
  const destPos = getMatrixPosition(dest);
  return srcPos.row === destPos.row || srcPos.col === destPos.col;
};

export function swap(tiles: number[], src: number, _dest: number): number[] {
  const srcPos: MatrixPosition = getMatrixPosition(src);
  /* const destPos: MatrixPosition = getMatrixPosition(_dest); */
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
