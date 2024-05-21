// useTiles.ts
import { useState, useEffect } from "react";
import { constants } from "../constants/constants";
import { canSwap, swap, shuffle } from "../helpers";

export function useTiles() {
  const [tiles, setTiles] = useState([...Array(constants.TILE_COUNT).keys()]);
  const [solved, setIsSolved] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [moves, setMoves] = useState(0);

  const shuffleTiles = (): void => {
    setTiles((tiles) => {
      const shuffledTiles = shuffle([...tiles]);
      return shuffledTiles;
    });
  };

  const swapTiles = (tileIndex: number): void => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles: number[] = swap(
        tiles,
        tileIndex,
        tiles.indexOf(tiles.length - 1)
      );
      setTiles(swappedTiles);
    }
  };

  const handleTileClick = (index: number): void => {
    swapTiles(index);
    setMoves((prevMoves) => prevMoves + 1);
  };

  const handleShuffleClick = (): void => {
    shuffleTiles();
    setMoves(0);
  };

  const handleStartClick = (): void => {
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
