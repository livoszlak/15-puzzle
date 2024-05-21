import { useState, useEffect } from "react";
import "./App.css";
import { Box, Typography } from "@mui/material";
import Board from "./components/Board";
import Header from "./components/Header";
import { Constants } from "./types";

const gridSize = 4;

function App() {
  const [constants, setConstants] = useState<Constants>({
    TILE_COUNT: 16,
    GRID_SIZE: gridSize,
    BOARD_SIZE: 0,
    TILE_WIDTH: 0,
    TILE_HEIGHT: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let boardSize = Math.round(windowWidth * 0.8);
      const maxBoardSize = 500;

      if (boardSize > maxBoardSize) {
        boardSize = maxBoardSize;
      }

      setConstants({
        TILE_COUNT: 16,
        GRID_SIZE: gridSize,
        BOARD_SIZE: boardSize,
        TILE_WIDTH: Math.round(boardSize / gridSize),
        TILE_HEIGHT: Math.round(boardSize / gridSize),
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Box>
        <Typography
          variant="h1"
          fontSize={"2rem"}
          fontFamily={"Open Sans"}
          sx={{ fontWeight: "800" }}
        >
          15-puzzle
        </Typography>
        <Header />
      </Box>
      <Board constants={constants} />
    </div>
  );
}

export default App;
