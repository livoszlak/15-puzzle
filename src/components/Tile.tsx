import { getMatrixPosition, getVisualPosition } from "../helpers";
import { constants } from "../constants/constants";

function Tile(props) {
  const { tile, index, width, height, handleTileClick } = props;

  const { row, col } = getMatrixPosition(index);
  const visualPos = getVisualPosition(row, col, width, height);
  const tileStyle = {
    width: `calc(100% / ${constants.GRID_SIZE})`,
    height: `calc(100% / ${constants.GRID_SIZE})`,
    translateX: visualPos.x,
    translateY: visualPos.y,
  };

  return (
    <li
      style={{
        width: tileStyle.width,
        height: tileStyle.height,
        transform: `translate3d(${tileStyle.translateX}px, ${tileStyle.translateY}px, 0)`,
        opacity: tile === constants.TILE_COUNT - 1 ? 0 : 1,
      }}
      className="tile"
      onClick={() => handleTileClick(index)}
    >
      {tile + 1}
    </li>
  );
}

export default Tile;
