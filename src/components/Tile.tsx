import { getMatrixPosition, getVisualPosition } from "../helpers";
import { constants } from "../constants/constants";

type TileProps = {
  tile: number;
  index: number;
  width: number;
  height: number;
  handleTileClick: (index: number) => void;
};

function Tile({ tile, index, width, height, handleTileClick }: TileProps) {
  const { row, col } = getMatrixPosition(index);
  const visualPos = getVisualPosition(row, col, width, height);
  const tileClass = tile === constants.TILE_COUNT - 1 ? "tile empty" : "tile";

  let borderRadius: string;
  switch (constants.COLUMNS) {
    case 5:
    case 6:
      borderRadius = "5px";
      break;
    default:
      if (constants.COLUMNS > 6) {
        borderRadius = "3px";
      } else if (constants.COLUMNS === 4 || constants.COLUMNS < 4) {
        borderRadius = "8px";
      }
      break;
  }

  const style: React.CSSProperties = {
    width: `${constants.TILE_WIDTH}px`,
    height: `${constants.TILE_HEIGHT}px`,
    transform: `translate3d(${visualPos.x}px, ${visualPos.y}px, 0)`,
    border: "1px solid #242424",
    borderRadius: borderRadius,
    transition: "transform 0.1s ease-out",
  };

  return (
    <div
      style={style}
      className={tileClass}
      onClick={() => handleTileClick(index)}
    >
      {tile === constants.TILE_COUNT - 1 ? "" : tile + 1}
    </div>
  );
}

export default Tile;
