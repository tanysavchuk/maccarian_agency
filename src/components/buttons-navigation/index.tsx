import { Box, Button } from "@mui/material";
import React from "react";
import { TextButtonNav } from "./styled";

export const ButtonsNavigation = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box>
        <TextButtonNav variant="text" color="inherit" size={"small"}>
          Home
        </TextButtonNav>
      </Box>
      <Box marginX={1}>
        <TextButtonNav variant="text" color="inherit" size={"small"}>
          Documentation
        </TextButtonNav>
      </Box>
      <Box>
        <Button variant="outlined" color="success" size={"small"}>
          Purchas now
        </Button>
      </Box>
    </Box>
  );
};
