import Tile from "./Tile";
import { Constants } from "../types";
import { useTiles } from "../hooks/useTiles";
import { Typography, Box } from "@mui/material";
import { isSolved } from "../helpers";
import Button from "./Button";

interface BoardProps {
  constants: Constants;
}

const Board: React.FC<BoardProps> = ({ constants }) => {
  const {
    tiles,
    handleTileClick,
    handleShuffleClick,
    moves,
    showModal,
    setShowModal,
    solved,
    setIsSolved,
  } = useTiles() as {
    tiles: number[];
    handleTileClick: (index: number) => void;
    handleShuffleClick: () => void;
    moves: number;
    showModal: boolean;
    solved: boolean;
    setIsSolved: React.Dispatch<React.SetStateAction<boolean>>;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  };

  /*   const style = {
    height: constants.BOARD_HEIGHT,
    width: constants.BOARD_WIDTH,
    borderRadius: "15px",
  }; */

  const style = {
    height: `${constants.BOARD_HEIGHT}px`,
    width: `${constants.BOARD_WIDTH}px`,
    borderRadius: "15px",
  };

  return (
    <>
      <Typography
        variant="overline"
        fontSize={"1rem"}
        fontFamily={"Open Sans"}
        sx={{ fontWeight: "400", color: "#0066cc" }}
      >
        <b>Moves:</b> {moves}
      </Typography>

      <div style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            tile={tile}
            width={constants.TILE_WIDTH}
            height={constants.TILE_HEIGHT}
            handleTileClick={handleTileClick}
          />
        ))}
      </div>

      <Button onClick={handleShuffleClick}>
        {isSolved(tiles) ? "Play again" : "Reshuffle"}
      </Button>

      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Button
          onClick={() => {
            setIsSolved(true);
            setShowModal(true);
          }}
        >
          Set puzzle as solved
        </Button>
        <Typography variant="overline">(for dev testing purposes!)</Typography>
      </Box>

      {showModal && <div className="overlay"></div>}
      {showModal && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#0066cc",
            borderRadius: "15px",
            color: "#eeeeee",
            padding: "10px",
            zIndex: 2,
          }}
        >
          <p>
            Congratulations! You solved the puzzle in {moves} moves. Can you
            beat that?
          </p>
          <Button
            onClick={() => {
              handleShuffleClick();
              setShowModal(false);
            }}
          >
            Play again
          </Button>
        </div>
      )}
    </>
  );
};

export default Board;
