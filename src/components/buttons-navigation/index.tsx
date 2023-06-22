import { Box, Button } from "@mui/material";
import React from "react";
import { TextButtonNav } from "./styled";

export const ButtonsNavigation = () => {
  return (
    <Box>
      <TextButtonNav variant="text" color="inherit" size={"small"}>
        Home
      </TextButtonNav>
      <TextButtonNav variant="text" color="inherit" size={"small"}>
        Documentation
      </TextButtonNav>
      <Button variant="outlined" color="success" size={"small"}>
        Purchas now
      </Button>
    </Box>
  );
};
