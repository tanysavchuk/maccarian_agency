import { Typography } from "@mui/material";
import React from "react";
import { CardBody, IconBox } from "./styled";
import { CardCustomizeInterface } from "../../types";

export const CardCustomize = ({
  id,
  icon,
  title,
  text,
}: CardCustomizeInterface) => {
  return (
    <CardBody item xs={4}>
      <IconBox
        borderRadius={"50%"}
        width={55}
        height={55}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        margin={"0 auto"}
        color={"#2CA24D"}
      >
        {icon}
      </IconBox>
      <Typography variant="h6" marginY={1} color={"#25252D"}>
        {title}
      </Typography>
      <Typography variant="body1" color={"#5A5A72"}>
        {text}
      </Typography>
    </CardBody>
  );
};
