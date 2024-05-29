import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import { useConstants } from "./hooks/useConstants";
import { Constants } from "./types";

function App() {
  const constants = useConstants() as Constants;

  return (
    <div className="App">
      <Header />
      <Board constants={constants} />
    </div>
  );
}

export default App;
