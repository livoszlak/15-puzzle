import { useState } from "react";
import "./App.css";
import { Box, Typography } from "@mui/material";
import Board from "./components/Board";

function App() {
  const [count, setCount] = useState(0);

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
      </Box>
      <Board />
    </div>
  );
}

export default App;
