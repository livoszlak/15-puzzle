import "./App.css";
import { Box, Typography } from "@mui/material";
import Board from "./components/Board";
import Header from "./components/Header";
import { useConstants } from "./hooks/useConstants";

function App() {
  const constants = useConstants();

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
