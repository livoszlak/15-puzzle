import { Box, Typography } from "@mui/material";

export default function Header(): JSX.Element {
  return (
    <Box
      component="header"
      sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <Typography
        variant="h1"
        fontSize={"3rem"}
        fontFamily={"Open Sans"}
        sx={{ fontWeight: "800", color: "#0066cc" }}
      >
        15-puzzle
      </Typography>
      <Typography
        variant="overline"
        fontSize={"1rem"}
        fontFamily={"Open Sans"}
        sx={{ fontWeight: "500", color: "#0066cc", lineHeight: "20px" }}
        paragraph={true}
      >
        How few moves can you solve the puzzle in?
      </Typography>
    </Box>
  );
}
