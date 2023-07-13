import { Box, Grid } from "@mui/material";
import styled from "styled-components";

export const Fader = styled(Box).attrs(({ $open }: { $open: boolean }) => ({
  $open: $open,
}))`
  background-color: black;
  opacity: 0.5;
  display: ${({ $open }) => {
    return $open ? "block" : "none";
  }};
  width: 100vw;
  height: 100vh;
  padding: 5px 5px 5px 20px;
  position: fixed;
  z-index: 98;
  top: 0px;
  transition: opacity 0.2s ease;
`;

export const LeftMenu = styled(Box).attrs(({ $open }: { $open: boolean }) => ({
  $open: $open,
}))`
  background-color: white;
  overflow-y: scroll;
  display: block;
  max-width: 400px;
  height: 100%;
  padding: 5px 5px 5px 20px;
  overflow-y: scroll;
  position: fixed;
  z-index: 99;
  top: 0px;
  left: ${({ $open }) => {
    return $open ? "0" : "-420px";
  }};
  transition: left 0.2s ease-in-out;
`;

export const LeftMenuList = styled(Grid)`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px 0;
  line-height: 30px;
  font-size: 15px;
`;
