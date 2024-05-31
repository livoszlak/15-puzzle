import { useState, useEffect } from "react";
import { Constants } from "../types";
import { columns, rows } from "../constants/constants";

export function useConstants(): Constants {
  const calculateConstants = () => {
    const windowWidth = window.innerWidth;
    const maxTileSize = 100;

    let tileWidth: number = Math.min(
      (windowWidth * 0.8) / columns,
      maxTileSize
    );
    let tileHeight: number = tileWidth;

    let boardWidth: number = tileWidth * columns;
    let boardHeight: number = tileHeight * rows;

    const tiles: number = 16;
    const tilesPerColumn: number = Math.ceil(tiles / columns);
    boardHeight = tileHeight * tilesPerColumn;

    return {
      TILE_COUNT: tiles,
      COLUMNS: columns,
      ROWS: rows,
      TILE_WIDTH: tileWidth,
      TILE_HEIGHT: tileHeight,
      BOARD_WIDTH: boardWidth,
      BOARD_HEIGHT: boardHeight,
    };
  };

  const [constants, setConstants] = useState<Constants>(calculateConstants());

  useEffect(() => {
    const handleResize = () => {
      setConstants(calculateConstants());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return constants;
}
