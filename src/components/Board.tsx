import Tile from "./Tile";
import { Constants } from "../types";
import { useTiles } from "../hooks/useTiles";
import { Typography } from "@mui/material";
import { isSolved } from "../helpers";

interface BoardProps {
  constants: Constants;
}

const Board: React.FC<BoardProps> = ({ constants }) => {
  const { tiles, handleTileClick, handleShuffleClick, moves } = useTiles();

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

      <div className="board-wrapper">
        <div style={style} className="board">
          {tiles.map((tile, index) => (
            <Tile
              key={tile}
              index={index}
              tile={tile}
              width={constants.TILE_WIDTH}
              height={constants.TILE_HEIGHT}
              handleTileClick={handleTileClick}
              /* gridSize={constants.COLUMNS} */
            />
          ))}
        </div>
      </div>

      <button onClick={handleShuffleClick}>
        {isSolved(tiles) ? "Play again" : "Reshuffle"}
      </button>
    </>
  );
};

export default Board;
