import Tile from "./Tile";
import { Constants } from "../types";
import { useTiles } from "../hooks/useTiles";
import { Typography } from "@mui/material";

interface BoardProps {
  constants: Constants;
}

const Board: React.FC<BoardProps> = ({ constants }) => {
  const { tiles, handleTileClick, handleShuffleClick, moves } = useTiles();

  const style = {
    width: constants.BOARD_SIZE,
    height: constants.BOARD_SIZE,
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
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            tile={tile}
            width={constants.TILE_WIDTH}
            height={constants.TILE_HEIGHT}
            handleTileClick={handleTileClick}
            gridSize={constants.GRID_SIZE}
          />
        ))}
      </ul>

      <button onClick={handleShuffleClick}>Reshuffle</button>
    </>
  );
};

export default Board;
