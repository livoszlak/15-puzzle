import { getMatrixPosition, getVisualPosition } from "../helpers";
import { constants } from "../constants/constants";

type TileProps = {
  tile: number;
  index: number;
  width: number;
  height: number;
  handleTileClick: (index: number) => void;
};

function Tile(props: TileProps) {
  const { tile, index, width, height, handleTileClick } = props;

  const { row, col } = getMatrixPosition(index);
  const visualPos = getVisualPosition(row, col, width, height);

  const tileStyle = {
    width: `${constants.TILE_WIDTH}px`,
    height: `${constants.TILE_HEIGHT}px`,
    translateX: visualPos.x,
    translateY: visualPos.y,
  };

  return (
    <div
      style={{
        width: tileStyle.width,
        height: tileStyle.height,
        transform: `translate3d(${tileStyle.translateX}px, ${tileStyle.translateY}px, 0)`,
        backgroundColor:
          tile === constants.TILE_COUNT - 1 ? "#242424" : "#747bff",
        border: "1px solid #242424",
      }}
      className="tile"
      onClick={() => handleTileClick(index)}
    >
      {tile === constants.TILE_COUNT - 1 ? "" : tile + 1}
    </div>
  );
}

export default Tile;

/**
 *       <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
 */
