import styled from "styled-components";
import { Grid } from "@mui/material";

export const GridContainerStyled = styled(Grid)`
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  ${(props) => props.theme.breakpoints.down("lg")} {
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
  }
`;
