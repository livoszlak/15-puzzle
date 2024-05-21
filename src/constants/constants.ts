import { Constants } from "../types";

const windowWidth = window.innerWidth;
const boardSize = Math.round(windowWidth * 0.8);
const gridSize = 4;

export const constants: Constants = {
  TILE_COUNT: 16,
  GRID_SIZE: gridSize,
  BOARD_SIZE: boardSize,
  TILE_WIDTH: Math.round(boardSize / gridSize),
  TILE_HEIGHT: Math.round(boardSize / gridSize),
};
