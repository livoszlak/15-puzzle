import { useState } from "react";
import Tile from "./Tile";
import { constants } from "../constants/constants";
import { canSwap, swap, shuffle } from "../helpers";

function Board() {
  const [tiles, setTiles] = useState([...Array(constants.TILE_COUNT).keys()]);
  const [solved, setIsSolved] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles);
    setTiles(shuffledTiles);
  };

  const swapTiles = (tileIndex: number) => {
    if (canSwap(tileIndex, tiles.length - 1)) {
      const swappedTiles = swap(tiles, tileIndex, tiles.length - 1);
      setTiles(swappedTiles);
    }
  };

  const handleTileClick = (index: number) => {
    swapTiles(index);
  };

  const handleShuffleClick = () => {
    shuffleTiles();
  };

  const handleStartClick = () => {
    shuffleTiles();
    setIsStarted(true);
    console.log("started");
  };

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
      {!isStarted ? (
        <button onClick={() => handleStartClick}>Start game</button>
      ) : (
        <button onClick={() => handleShuffleClick}>Reshuffle</button>
      )}
    </>
  );
}

export default Board;
