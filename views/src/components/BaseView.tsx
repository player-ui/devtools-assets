import React, { createContext } from "react";
import { Text, Grid, GridItem, Button, ButtonGroup } from "@chakra-ui/react";
import { View, Asset } from "@player-tools/dsl";
import { ReactAsset } from "@player-ui/react";
import { BaseViewTemplateProps } from "../types";

export const BaseView = ({ header, main, footer }: BaseViewTemplateProps) => {
  return (
    <>
      <div className="custom-view-template">
        <Grid templateAreas={'"header header" "main main" "footer footer"'}>
          <GridItem area={"header"}>
            {header && <ReactAsset {...header} />}
          </GridItem>
          <GridItem area={"main"}>{main && <ReactAsset {...main} />} </GridItem>
          <GridItem area={"footer"}>
            {footer && <ReactAsset {...footer} />}
          </GridItem>
        </Grid>
      </div>
    </>
  );
};
