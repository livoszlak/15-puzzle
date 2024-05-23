import { Constants } from "../types";

const windowWidth = window.innerWidth;
/* const boardSize = Math.round(windowWidth * 0.8); */
export const columns = 7;

export const constants: Constants = {
  TILE_COUNT: 16,
  COLUMNS: columns,
  ROWS: 16 / columns,
  TILE_WIDTH: Math.min(Math.round((windowWidth * 0.8) / columns), 100),
  TILE_HEIGHT: Math.min(Math.round((windowWidth * 0.8) / columns), 100),
  BOARD_HEIGHT:
    Math.min(Math.round((windowWidth * 0.8) / columns), 100) * (16 / columns),
  BOARD_WIDTH:
    Math.min(Math.round((windowWidth * 0.8) / columns), 100) * columns,
};
