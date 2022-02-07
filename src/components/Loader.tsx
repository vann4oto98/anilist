import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
