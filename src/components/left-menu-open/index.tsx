import React, { useEffect, useState } from "react";
import { LeftMenuCore } from "../left-menu-core";

import { LeftMenu, LeftMenuList, Fader } from "./styled";
import { TablesPagesInterface } from "../../types";
import { Box, Button, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { Menu as MenuIcon } from "@mui/icons-material";

export const LeftMenuOpen = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpen = () => {
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  const [landingPages, setLandingPages] = useState<TablesPagesInterface[]>([]);
  const [supportingPages, setSupportingPages] = useState<
    TablesPagesInterface[]
  >([]);
  const [authPages, setAuthPages] = useState<TablesPagesInterface[]>([]);

  const fetchLandingPages = async () => {
    try {
      const res = await fetch("http://localhost:3001/landing_pages");
      const landingPages = await res.json();
      setLandingPages(landingPages);
    } catch (error) {
      console.error("landingPages ", error);
    }
  };

  const fetchSupportingPages = async () => {
    try {
      const res = await fetch("http://localhost:3001/supporting_pages");
      const supportingPages = await res.json();
      setSupportingPages(supportingPages);
    } catch (error) {
      console.error("supportingPages", error);
    }
  };

  const fetchAuthPages = async () => {
    try {
      const res = await fetch("http://localhost:3001/auth_pages");
      const authPages = await res.json();
      setAuthPages(authPages);
    } catch (error) {
      console.log("authPages error: ", error);
    }
  };

  useEffect(() => {}, [landingPages, supportingPages, authPages]);

  useEffect(() => {
    fetchLandingPages();
    fetchSupportingPages();
    fetchAuthPages();
  }, []);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <MenuIcon />
      </IconButton>
      <Fader $open={openMenu} onClick={handleClose}></Fader>
      <LeftMenu $open={openMenu}>
        <Box textAlign={"end"}>
          <IconButton onClick={handleClose}>
            <ClearIcon color="inherit" fontSize={"small"} />
          </IconButton>
        </Box>
        <Box marginBottom={3}>
          <Typography
            textAlign={"start"}
            variant="subtitle1"
            fontSize={17}
            fontWeight={600}
          >
            Landing pages
          </Typography>
          <LeftMenuList container>
            {landingPages.map((landingPages: TablesPagesInterface) => (
              <LeftMenuCore key={`${landingPages.id}`} {...landingPages} />
            ))}
          </LeftMenuList>
        </Box>
        <Box marginBottom={3}>
          <Typography
            textAlign={"start"}
            variant="subtitle1"
            fontSize={17}
            fontWeight={600}
          >
            Supporting pages
          </Typography>
          <LeftMenuList container>
            {supportingPages.map((supportingPages: TablesPagesInterface) => (
              <LeftMenuCore
                key={`${supportingPages.id}`}
                {...supportingPages}
              />
            ))}
          </LeftMenuList>
        </Box>
        <Box>
          <Typography
            textAlign={"start"}
            variant="subtitle1"
            fontSize={17}
            fontWeight={600}
          >
            Auth pages
          </Typography>
          <LeftMenuList container>
            {authPages.map((authPages: TablesPagesInterface) => (
              <LeftMenuCore key={`${authPages.id}`} {...authPages} />
            ))}
          </LeftMenuList>
        </Box>

        <Box width={"100%"} marginY={3}>
          <Box width={"100%"} marginBottom={1}>
            <Button variant="outlined" color="success" fullWidth>
              Documentation
            </Button>
          </Box>
          <Box width={"100%"}>
            <Button variant="contained" color="success" fullWidth>
              Purchas now
            </Button>
          </Box>
        </Box>
      </LeftMenu>
    </>
  );
};
