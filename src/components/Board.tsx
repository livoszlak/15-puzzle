import Tile from "./Tile";
import { Constants } from "../types";
import { useTiles } from "../hooks/useTiles";
import { Typography } from "@mui/material";
import { isSolved } from "../helpers";
import Button from "./Button";

interface BoardProps {
  constants: Constants;
}

const Board: React.FC<BoardProps> = ({ constants }) => {
  const { tiles, handleTileClick, handleShuffleClick, moves } = useTiles() as {
    tiles: number[];
    handleTileClick: (index: number) => void;
    handleShuffleClick: () => void;
    moves: number;
  };

  const style = {
    height: constants.BOARD_HEIGHT,
    width: constants.BOARD_WIDTH,
  };

  return (
    <>
      <Typography
        variant="h4"
        fontSize={"1rem"}
        fontFamily={"Open Sans"}
        sx={{ fontWeight: "400" }}
      >
        Moves: {moves}
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
    </>
  );
};

export default Board;
