import { Box, Typography } from "@mui/material";
import { useTiles } from "../hooks/useTiles";
import { useState } from "react";

export default function Header() {
  const [moves, setMoves] = useState(0);
  return (
    <Box>
      <Typography
        variant="h5"
        fontSize={"1rem"}
        fontFamily={"Open Sans"}
        sx={{ fontWeight: "400" }}
      >
        How few moves can you solve the puzzle in?
      </Typography>
    </Box>
  );
}
