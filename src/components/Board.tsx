// Board.tsx
import Tile from "./Tile";
import { constants } from "../constants/constants";
import { useTiles } from "../hooks/useTiles";

function Board() {
  const { tiles, handleTileClick, handleShuffleClick } = useTiles();

  const style = {
    width: constants.BOARD_SIZE,
    height: constants.BOARD_SIZE,
  };

  return (
    <>
      <ul style={style} className="board">
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
      </ul>

      <button onClick={handleShuffleClick}>Reshuffle</button>
    </>
  );
}

export default Board;
