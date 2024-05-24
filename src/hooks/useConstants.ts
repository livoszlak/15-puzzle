import { useState, useEffect } from "react";
import { Constants } from "../types";
import { columns, rows } from "../constants/constants";

export function useConstants() {
  const [constants, setConstants] = useState<Constants>({
    TILE_COUNT: 16,
    COLUMNS: columns,
    ROWS: rows,
    TILE_WIDTH: 0,
    TILE_HEIGHT: 0,
    BOARD_HEIGHT: 0,
    BOARD_WIDTH: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const tileWidth = Math.min(
        Math.round((windowWidth * 0.8) / constants.COLUMNS),
        100
      );
      const tileHeight = tileWidth;

      setConstants((prevConstants) => ({
        ...prevConstants,
        TILE_WIDTH: tileWidth,
        TILE_HEIGHT: tileHeight,
        BOARD_WIDTH: tileWidth * constants.COLUMNS,
        BOARD_HEIGHT: tileHeight * constants.ROWS,
      }));
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [constants.COLUMNS]);

  return constants;
}
