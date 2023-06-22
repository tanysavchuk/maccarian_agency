import { Typography } from "@mui/material";
import { GridItemStyled } from "../styled/grid-item";
import { TablesPagesInterface } from "../../types";

const TablesPages = ({ title, body1, body2 }: TablesPagesInterface) => {
  return (
    <GridItemStyled item xs={5} lg={4}>
      <a href="#">
        <Typography
          variant="h6"
          align="left"
          fontWeight={"700"}
          color={"rgb(45, 55, 72)"}
        >
          {title}
        </Typography>
        <Typography variant="body1" align="left" color={"rgb(100, 110, 115)"}>
          {body1}
        </Typography>
        <Typography variant="inherit" align="right" color={"rgb(0, 171, 85)"}>
          {body2}
        </Typography>
      </a>
    </GridItemStyled>
  );
};

export default TablesPages;
