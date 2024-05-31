import { useState, useEffect } from "react";
import { constants } from "../constants/constants";
import { canSwap, swap, shuffle } from "../helpers";
import { isSolved } from "../helpers";

export function useTiles() {
  const initialTiles = shuffle([...Array(constants.TILE_COUNT).keys()]);
  const [tiles, setTiles] = useState(initialTiles);
  const [solved, setIsSolved] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const shuffleTiles = (): void => {
    setTiles((tiles: number[]) => {
      const shuffledTiles = shuffle([...tiles]);
      return shuffledTiles;
    });
  };

  const swapTiles = (tileIndex: number): boolean => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles: number[] = swap(
        tiles,
        tileIndex,
        tiles.indexOf(tiles.length - 1)
      );
      setTiles(swappedTiles);
      return true;
    }
    return false;
  };

  const handleTileClick = (index: number): void => {
    const didSwap = swapTiles(index);
    if (didSwap) {
      setMoves((prevMoves: number) => prevMoves + 1);
    }
    /* setIsSolved(isSolved(tiles)); */
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

  useEffect(() => {
    if (solved) {
      setShowModal(true);
    }
  }, [solved]);

  useEffect(() => {
    setIsSolved(isSolved(tiles));
  }, [tiles]);

  return {
    tiles,
    solved,
    setIsSolved,
    isStarted,
    moves,
    showModal,
    setShowModal,
    handleTileClick,
    handleShuffleClick,
    handleStartClick,
    shuffleTiles,
  };
}
