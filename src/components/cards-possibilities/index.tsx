import { Grid, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import React from "react";

import { CardWrap, IconWrap } from "./styled";
import { PossibilitiesInterface } from "../../types";

export const Possibilities = ({
  icon,
  header,
  body,
}: PossibilitiesInterface) => {
  return (
    <Grid item xs={4} p={2}>
      <CardWrap>
        <CardContent>
          <IconWrap>{icon}</IconWrap>
          <Typography variant="h6" textAlign={"start"} marginY={1}>
            {header}
          </Typography>
          <Typography variant="body1" textAlign={"start"} color={"GrayText"}>
            {body}
          </Typography>
        </CardContent>
      </CardWrap>
    </Grid>
  );
};
