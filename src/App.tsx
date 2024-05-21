import "./App.css";
import { Box, Typography } from "@mui/material";
import { useTiles } from "./hooks/useTiles";
import Board from "./components/Board";
import Header from "./components/Header";
import { useState } from "react";

function App() {
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
      <Board />
    </div>
  );
}

export default App;
