import { Grid, Typography } from "@mui/material";
import React from "react";
import { UsersInterface } from "../../types";

export const Users = ({ id, name, email }: UsersInterface) => {
  return (
    <Grid item>
      <Typography>{id}</Typography>
      <Typography>{name} </Typography>
      <Typography>{email} </Typography>
    </Grid>
  );
};
