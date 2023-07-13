import { Box, Button } from "@mui/material";
import styled from "styled-components";

export const BoxBannerRocketWrap = styled(Box)`
  ${(props) => props.theme.breakpoints.down("md")} {
    display: block;
  }
`;

export const ButtonBannerRocketContainer = styled(Box)`
  ${(props) => props.theme.breakpoints.down("lg")} {
    width: 100%;
  }
`;

export const ButtonBannerRocketWrap = styled(Box)`
  ${(props) => props.theme.breakpoints.down("lg")} {
    width: 50%;
  }
`;

export const ButtonBannerRocket = styled(Button)`
  ${(props) => props.theme.breakpoints.down("lgs")} {
    width: 100%;
  }
`;
