import { Constants } from "../types";

const windowWidth = window.innerWidth;
export const columns = 4;
export const rows = 2;

export const constants: Constants = {
  TILE_COUNT: 16,
  COLUMNS: columns,
  ROWS: rows,
  TILE_WIDTH: Math.min(Math.round((windowWidth * 0.8) / columns), 100),
  TILE_HEIGHT: Math.min(Math.round((windowWidth * 0.8) / columns), 100),
  BOARD_WIDTH:
    Math.min(Math.round((windowWidth * 0.8) / columns), 100) * columns,
  BOARD_HEIGHT: Math.min(Math.round((windowWidth * 0.8) / rows), 100) * rows,
};
