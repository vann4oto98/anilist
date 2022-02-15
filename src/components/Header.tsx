import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ margin: "auto" }}>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Typography
          sx={{ fontSize: "4rem", color: "#0070f3" }}
          variant="h1"
          component="h1"
        >
          Ani
        </Typography>
        <Typography sx={{ fontSize: "4rem" }} variant="h1" component="h1">
          List
        </Typography>
      </Box>
      <Typography
        sx={{ textAlign: "center", padding: "1rem" }}
        variant="body1"
        component="p"
      >
        Top User Rated Animes
      </Typography>
    </Box>
  );
};

export default Header;
