import { Box } from "@mui/material";
import { useState } from "react";
import Tile from "./Tile";
import {
  TILE_COUNT,
  GRID_SIZE,
  BOARD_SIZE,
  TILE_WIDTH,
  TILE_HEIGHT,
} from "../constants/constants";

function Board() {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);

  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <h1>Hi</h1>
    </Box>
  );
}

export default Board;
