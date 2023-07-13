import { Grid, Button, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import Banner from "../../components/Banner";
import BannerRocket from "../../components/banner-rocket";
import TablesPages from "../../components/tables-pages";
import { GridContainerStyled } from "../../components/styled/grid-container";
import { SectionHeader } from "../../components/section-header";
import { CardCustomize } from "../../components/cards-costomize";
import { ButtonsNavigation } from "../../components/buttons-navigation";
import { Logo } from "../../components/Logo";
import { Possibilities } from "../../components/cards-possibilities";
import CopyrightIcon from "@mui/icons-material/Copyright";

import { TablesPagesInterface } from "../../types";
import { CardCustomizeInterface } from "../../types";
import { PossibilitiesInterface } from "../../types";

import {
  BoxBannerRocketWrap,
  ButtonBannerRocket,
  ButtonBannerRocketContainer,
  ButtonBannerRocketWrap,
} from "../../components/styled/box_container";
import {
  BodyBannerRocket,
  HeaderBannerRocket,
} from "../../components/styled/typography";
import { HeaderFix } from "../../components/header-fixed";

const Home = () => {
  const [cardsCustomize, setCardsCustomize] = useState<
    CardCustomizeInterface[]
  >([]);
  const [possibilities, setPossibilities] = useState<PossibilitiesInterface[]>(
    []
  );
  const [landingPages, setLandingPages] = useState<TablesPagesInterface[]>([]);

  const [supportingPages, setSupportingPages] = useState<
    TablesPagesInterface[]
  >([]);
  const [authPages, setAuthPages] = useState<TablesPagesInterface[]>([]);

  const fetchCardCustomize = async () => {
    try {
      const response = await fetch("http://localhost:3001/cards_customize");
      const cardsCustomize = await response.json();
      setCardsCustomize(cardsCustomize);
    } catch (error) {
      console.error("dsdwsdsd", error);
    }
  };

  const fetchPossibilities = async () => {
    try {
      const res = await fetch("http://localhost:3001/possibilities");
      const possibilities = await res.json();
      setPossibilities(possibilities);
    } catch (error) {
      console.error("possibilities ", error);
    }
  };

  const fetchLandingPages = async () => {
    try {
      const res = await fetch("http://localhost:3001/landing_pages");
      const landingPages = await res.json();
      console.log(landingPages);
      setLandingPages(landingPages);
    } catch (error) {
      console.error("landingPages ", error);
    }
  };

  const fetchSupportingPages = async () => {
    try {
      const res = await fetch("http://localhost:3001/supporting_pages");
      const supportingPages = await res.json();
      console.log("supportingPages: ", supportingPages);
      setSupportingPages(supportingPages);
    } catch (error) {
      console.error("supportingPages", error);
    }
  };

  const fetchAuthPages = async () => {
    try {
      const res = await fetch("http://localhost:3001/auth_pages");
      const authPages = await res.json();
      console.log("authPages : ", authPages);
      setAuthPages(authPages);
    } catch (error) {
      console.log("authPages error: ", error);
    }
  };

  useEffect(() => {}, [
    cardsCustomize,
    possibilities,
    landingPages,
    supportingPages,
    authPages,
  ]);

  useEffect(() => {
    fetchCardCustomize();
    fetchPossibilities();
    fetchLandingPages();
    fetchSupportingPages();
    fetchAuthPages();
  }, []);

  return (
    <Box margin={"0 auto"}>
      <HeaderFix />

      <Box
        margin={"0 auto"}
        sx={{
          background: "rgb(247, 249, 252);",
        }}
      >
        <Box
          margin={"0 auto"}
          display={"flex"}
          justifyContent={"center"}
          width={"85%"}
          marginBottom={"20px"}
          maxWidth={1400}
        >
          <BoxBannerRocketWrap
            maxWidth={"1400px"}
            display={"flex"}
            paddingY={10}
            width={"100%"}
            alignItems={"center"}
            marginTop={"-37px"}
          >
            <Box width={"50%"} paddingTop={10}>
              <HeaderBannerRocket
                variant="h1"
                textAlign="left"
                fontSize={"3.75rem"}
                fontWeight={600}
                color={"#212121"}
                lineHeight={1.25}
                width={"75%"}
              >
                Turn your ideas into a ,<span>success</span>.
              </HeaderBannerRocket>
              <BodyBannerRocket
                variant="body1"
                textAlign="left"
                color={"#757575"}
                fontSize={22}
                marginY={4}
              >
                Webbee will make your product look modern and professional while
                saving you precious time.
              </BodyBannerRocket>
              <ButtonBannerRocketContainer
                display={"flex"}
                alignItems={"center"}
              >
                <ButtonBannerRocketWrap marginRight={4}>
                  <ButtonBannerRocket variant="contained" color={"success"}>
                    Purchase now
                  </ButtonBannerRocket>
                </ButtonBannerRocketWrap>
                <ButtonBannerRocketWrap>
                  <ButtonBannerRocket variant="outlined" color={"success"}>
                    View documentation
                  </ButtonBannerRocket>
                </ButtonBannerRocketWrap>
              </ButtonBannerRocketContainer>
            </Box>
            <Box width="50%">
              <BannerRocket />
            </Box>
          </BoxBannerRocketWrap>
        </Box>
      </Box>
      <Box width={"100%"} display={"flex"} justifyContent={"center"}>
        <Box maxWidth={"1400px"} width={"85%"}>
          <Grid container flexWrap={"wrap"}>
            {cardsCustomize.map((item: CardCustomizeInterface) => (
              <CardCustomize key={`${item.id}`} {...item} />
            ))}
          </Grid>
          <SectionHeader
            header="FEATURES"
            title=" The powerful and flexible theme for all kinds of businesses"
            text=" Build a beautiful, modern website with flexible, fully
          customizable, atomic Material-UI components. An experience you'd
          expect from a design system."
            buttonName=" Purchase now"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                maxWidth: "600px",
              }}
            >
              <Banner />
            </Box>
          </Box>
          <Grid
            container
            justifyContent={"space-between"}
            margin={"0 auto"}
            paddingY={5}
          >
            {possibilities.map((possibilities: PossibilitiesInterface) => (
              <Possibilities key={`${possibilities.id}`} {...possibilities} />
            ))}
          </Grid>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        sx={{ background: "rgb(247, 249, 252)" }}
      >
        <Box maxWidth={"1400px"} width={"85%"} paddingBottom={10}>
          <SectionHeader
            header="DEMO PAGES"
            title=" Webbee in action"
            text=" All examples you find below are included in the download package."
            buttonName=" Purchase now"
            children={
              <Button variant="outlined" color="success">
                Viev Documentation
              </Button>
            }
          />

          <Typography
            variant="h5"
            align="left"
            fontWeight={600}
            fontSize={25}
            marginY={4}
          >
            Landing Pages
          </Typography>
          <GridContainerStyled container spacing={0}>
            {landingPages.map((landingPages: TablesPagesInterface) => (
              <TablesPages key={`${landingPages.id}`} {...landingPages} />
            ))}
          </GridContainerStyled>
          <Typography
            variant="h5"
            align="left"
            fontWeight={600}
            fontSize={25}
            marginY={4}
          >
            Supporting Pages
          </Typography>
          <GridContainerStyled container spacing={0}>
            {supportingPages.map((supportingPages: TablesPagesInterface) => (
              <TablesPages key={`${supportingPages.id}`} {...supportingPages} />
            ))}
          </GridContainerStyled>
          <Typography
            variant="h5"
            align="left"
            fontWeight={600}
            fontSize={25}
            marginY={4}
          >
            Auth Pages
          </Typography>
          <GridContainerStyled container spacing={0}>
            {authPages.map((authPages: TablesPagesInterface) => (
              <TablesPages key={`${authPages.id}`} {...authPages} />
            ))}
          </GridContainerStyled>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        borderBottom={"1px solid #bdbdbd"}
        marginBottom={"20px"}
      >
        <Box maxWidth={"1400px"} width={"100%"}>
          <SectionHeader
            header="GET STARTED"
            title="Get started with Webbee today"
            text=" Build a beautiful, modern website with flexible, fully customizable, atomic Material-UI components."
            buttonName=" Purchase now"
          />
        </Box>
      </Box>
      <Box>
        <Box maxWidth={1200} margin={"0 auto"} paddingY={3}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box height={"24px"}>
              <Logo />
            </Box>
            <Box>
              <ButtonsNavigation />
            </Box>
          </Box>
          <Box>
            <Typography
              variant="body1"
              color={"#616161"}
              textAlign={"center"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              marginY={1}
            >
              <CopyrightIcon fontSize={"inherit"} />
              Webbee. 2021, Maccarian. All rights reserved
            </Typography>
            <Typography variant="body2" color={"#9e9e9e"}>
              When you visit or interact with our sites, services or tools, we
              or our authorised service providers may use cookies for storing
              information to help provide you with a better, faster and safer
              experience and for marketing purposes.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
