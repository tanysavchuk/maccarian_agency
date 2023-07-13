import { Grid } from "@mui/material";
import styled from "styled-components";

export const LeftMenuCoreStyled = styled(Grid)`
  flex-basis: 50%;
  flex-grow: 0;
  max-width: 50%;
  text-align: start;
  &:hover {
    color: green;
  }
`;
