// useTiles.ts
import { useState, useEffect } from "react";
import { constants } from "../constants/constants";
import { canSwap, swap, shuffle } from "../helpers";

export function useTiles() {
  const [tiles, setTiles] = useState([...Array(constants.TILE_COUNT).keys()]);
  const [solved, setIsSolved] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [moves, setMoves] = useState(0);

  const shuffleTiles = () => {
    setTiles((tiles) => {
      const shuffledTiles = shuffle([...tiles]);
      return shuffledTiles;
    });
  };

  const swapTiles = (tileIndex: number) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(
        tiles,
        tileIndex,
        tiles.indexOf(tiles.length - 1)
      );
      setTiles(swappedTiles);
    }
  };

  const handleTileClick = (index: number) => {
    swapTiles(index);
    setMoves((prevMoves) => prevMoves + 1);
    console.log(moves);
  };

  const handleShuffleClick = () => {
    shuffleTiles();
    setMoves(1);
  };

  const handleStartClick = () => {
    console.log("started");
    shuffleTiles();
    setIsStarted(true);
  };

  useEffect(() => {
    shuffleTiles();
  }, []);

  return {
    tiles,
    solved,
    isStarted,
    moves,
    handleTileClick,
    handleShuffleClick,
    handleStartClick,
    shuffleTiles,
  };
}
