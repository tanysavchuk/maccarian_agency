import { Typography } from "@mui/material";
import styled from "styled-components";

export const HeaderBannerRocket = styled(Typography)`
  ${(props) => props.theme.breakpoints.down("lg")} {
    font-size: 50px;
  }
`;

export const BodyBannerRocket = styled(Typography)`
  ${(props) => props.theme.breakpoints.down("lg")} {
    font-size: 20px;
  }
`;
