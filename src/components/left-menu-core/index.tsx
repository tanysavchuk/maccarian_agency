import React from "react";
import { TablesPagesInterface } from "../../types";
import { LeftMenuCoreStyled } from "./styled";

export const LeftMenuCore = ({ title }: TablesPagesInterface) => {
  return (
    <>
      <LeftMenuCoreStyled item> {title}</LeftMenuCoreStyled>
    </>
  );
};
