import "./App.css";

import Board from "./components/Board";
import Header from "./components/Header";
import { useConstants } from "./hooks/useConstants";
import { constants } from "./constants/constants";
import { Constants } from "./types";

function App() {
  const constants = useConstants();

  return (
    <div className="App">
      <Header />
      <Board constants={constants} />
    </div>
  );
}

export default App;
