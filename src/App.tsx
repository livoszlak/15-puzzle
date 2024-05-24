import "./App.css";
import { Typography } from "@mui/material";
import Board from "./components/Board";
import Header from "./components/Header";
import { useConstants } from "./hooks/useConstants";
import { Constants } from "./types";

function App() {
  const constants = useConstants() as Constants;

  return (
    <div className="App">
      <Typography
        variant="h1"
        fontSize={"2rem"}
        fontFamily={"Open Sans"}
        sx={{ fontWeight: "800" }}
      >
        15-puzzle
      </Typography>
      <Header />
      <Board constants={constants} />
    </div>
  );
}

export default App;
