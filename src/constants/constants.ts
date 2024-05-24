import { Constants } from "../types";

const windowWidth = window.innerWidth;
const boardSize = Math.round(windowWidth * 0.8);
export const columns = 4;
export const rows = 4;

export const constants: Constants = {
  TILE_COUNT: 16,
  COLUMNS: columns,
  ROWS: rows,
  TILE_WIDTH: Math.min(Math.round((windowWidth * 0.8) / columns), 100),
  TILE_HEIGHT: Math.min(Math.round((windowWidth * 0.8) / columns), 100),
  BOARD_HEIGHT: Math.round((windowWidth * 0.8) / columns) * (16 / columns),
  BOARD_WIDTH:
    Math.min(Math.round((windowWidth * 0.8) / columns), 100) * columns,
};
