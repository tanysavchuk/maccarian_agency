import React, { useEffect, useState, useCallback } from "react";
import { HeaderFixed, HeaderFixedContainer } from "./styled";
import { Box } from "@mui/material";
import { LeftMenuOpen } from "../left-menu-open";
import { Logo } from "../Logo";
import { HeaderBtnContainer } from "../styled/header-btn-container";
import { ButtonsNavigation } from "../buttons-navigation";

export const HeaderFix = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  const handleScroll = useCallback(() => {
    if (prevScrollPos > window.scrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setPrevScrollPos(window.scrollY);
  }, [setPrevScrollPos, prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <HeaderFixedContainer $visible={isVisible}>
      <HeaderFixed>
        <Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <LeftMenuOpen />
            <Box height={32}>
              <Logo />
            </Box>
          </Box>
        </Box>
        <HeaderBtnContainer>
          <ButtonsNavigation />
        </HeaderBtnContainer>
      </HeaderFixed>
    </HeaderFixedContainer>
  );
};
