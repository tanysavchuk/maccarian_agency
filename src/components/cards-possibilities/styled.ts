import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import styled from "styled-components";

export const GridItem = styled(Grid)``;

export const IconWrap = styled(Box)`
  background-color: #4caf50;
  color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

export const CardWrap = styled(Card)`
  padding: 5px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
