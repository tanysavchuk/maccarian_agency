import { Box } from "@mui/material";
import styled from "styled-components";

export const HeaderBtnContainer = styled(Box)`
  ${(props) => props.theme.breakpoints.down("md")} {
    visibility: hidden;
    height: 0;
    width: 0;
  }
`;
