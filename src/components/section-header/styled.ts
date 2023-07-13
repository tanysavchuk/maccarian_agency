import styled from "styled-components";
import { Box } from "@mui/material";

export const SectionHeaderWrapper = styled(Box)`
  text-align: center;
  margin-top: 80px;
  margin-bottom: 80px;

  ${(props) => props.theme.breakpoints.down("md")} {
  }
`;
