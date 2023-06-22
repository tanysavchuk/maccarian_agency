import React, { ReactElement } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { SectionHeaderWrapper } from "./styled";

interface SectionHeaderInterface {
  header: string;
  title: string;
  text: string;
  buttonName: string;
}

export const SectionHeader = ({
  header,
  title,
  text,
  buttonName,
  children,
}: SectionHeaderInterface & { children?: ReactElement }): ReactElement => {
  return (
    <SectionHeaderWrapper>
      <Typography
        variant="h6"
        textTransform={"uppercase"}
        color={"rgb(100, 110, 115)"}
      >
        {header}
      </Typography>
      <Typography
        variant="h3"
        color={"rgb(45, 55, 72)"}
        fontWeight={"700"}
        textAlign={"center"}
        fontSize={"2,9rem"}
        marginBottom={2}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        color={"rgb(100, 110, 115)"}
        fontWeight={500}
        textAlign={"center"}
        marginBottom={3}
      >
        {text}
      </Typography>
      <Box alignItems={"center"} display={"flex"} justifyContent={"center"}>
        <Button
          variant="contained"
          color="success"
          sx={{ marginRight: "15px" }}
        >
          {buttonName} <ArrowRightAltIcon />
        </Button>
        {children}
      </Box>
    </SectionHeaderWrapper>
  );
};
