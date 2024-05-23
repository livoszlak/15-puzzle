export interface TileProps {
  id: number;
  position: { x: number; y: number };
  onClick: () => void;
}

export type BoardState = {
  tiles: number[][];
  emptyTilePosition: { x: number; y: number };
};

export type Constants = {
  TILE_COUNT: number;
  COLUMNS: number;
  ROWS: number;
  TILE_WIDTH: number;
  TILE_HEIGHT: number;
  BOARD_HEIGHT: number;
  BOARD_WIDTH: number;
};

export interface HelperFunctions {
  canSwap: (tile1: number, tile2: number) => boolean;
  swap: (tile1: number, tile2: number) => void;
  shuffle: () => void;
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}
