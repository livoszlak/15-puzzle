import { getMatrixPosition, getVisualPosition } from "../helpers";
import { constants } from "../constants/constants";

type TileProps = {
  tile: number;
  index: number;
  width: number;
  height: number;
  handleTileClick: (index: number) => void;
};

type TileStyle = {
  width: string;
  height: string;
  translateX: number;
  translateY: number;
};

function Tile({ tile, index, width, height, handleTileClick }: TileProps) {
  const { row, col } = getMatrixPosition(index);
  const visualPos = getVisualPosition(row, col, width, height);
  const tileClass = tile === constants.TILE_COUNT - 1 ? "tile empty" : "tile";

  const tileStyle: TileStyle = {
    width: `${constants.TILE_WIDTH}px`,
    height: `${constants.TILE_HEIGHT}px`,
    translateX: visualPos.x,
    translateY: visualPos.y,
  };

  const style: React.CSSProperties = {
    width: tileStyle.width,
    height: tileStyle.height,
    transform: `translate3d(${tileStyle.translateX}px, ${tileStyle.translateY}px, 0)`,
    border: "1px solid #242424",
    borderRadius: "15px",
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
