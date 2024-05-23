import { useState, useEffect } from "react";
import { Constants } from "../types";
import { gridSize } from "../constants/constants";

export function useConstants() {
  const [constants, setConstants] = useState<Constants>({
    TILE_COUNT: 16,
    GRID_SIZE: gridSize,
    BOARD_SIZE: 0,
    TILE_WIDTH: 0,
    TILE_HEIGHT: 0,
  });

  useEffect(() => {
    const handleResize = (): void => {
      const windowWidth = window.innerWidth;
      const maxBoardSize = 500;
      const maxTileSize = 127;
      let boardSize = Math.round(windowWidth * 0.8);

      if (boardSize > maxBoardSize) {
        boardSize = maxBoardSize;
      }

      const maxBoardSizeBasedOnGrid = gridSize * maxTileSize;

      boardSize = Math.min(boardSize, maxBoardSizeBasedOnGrid);

      setConstants({
        TILE_COUNT: gridSize * gridSize,
        GRID_SIZE: gridSize,
        BOARD_SIZE: boardSize,
        TILE_WIDTH: Math.round(boardSize / gridSize),
        TILE_HEIGHT: Math.round(boardSize / gridSize),
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [gridSize]);

  return constants;
}
