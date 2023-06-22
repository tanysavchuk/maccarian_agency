import styled from "styled-components";
import { Grid } from "@mui/material";

export const GridItemStyled = styled(Grid)`
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding: 30px;

  ${(props) => props.theme.breakpoints.down("lg")} {
    flex-basis: 50%;
    flex-grow: 0;
    max-width: 50%;
  }
`;
