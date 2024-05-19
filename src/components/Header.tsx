import { Box, Typography } from "@mui/material";
import { useTiles } from "../hooks/useTiles";

export default function Header() {
  const { moves } = useTiles();
  return (
    <Box>
      <Typography
        variant="h5"
        fontSize={"1rem"}
        fontFamily={"Open Sans"}
        sx={{ fontWeight: "400" }}
      >
        {`Moves: ${moves}`}
      </Typography>
    </Box>
  );
}
