import { Box } from "@mui/material";
import styled from "styled-components";

export const HeaderFixedContainer = styled(Box).attrs(
  ({ $visible }: { $visible: boolean }) => ({
    $visible: $visible,
  })
)`
  position: fixed;
  left: 0;
  background: white;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  transition: top 0.4s ease-in-out;
  box-shadow: rgba(140, 152, 164, 0.25) 0px 3px 6px 0px;
  top: ${({ $visible }) => {
    return $visible ? "0" : "-60px";
  }};
`;

export const HeaderFixed = styled(Box)`
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
`;
