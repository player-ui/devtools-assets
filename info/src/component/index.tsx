import { Grid, GridItem } from "@chakra-ui/react";
import { ReactAsset } from "@player-ui/react";
import React from "react";
import type { InfoView } from "../types";

export const InfoComponent = (props: InfoView) => {
  const { header, main, footer } = props;

  return (
    <Grid templateAreas={'"header header" "main main" "footer footer"'}>
      <GridItem area={"header"}>
        {header && <ReactAsset {...header} />}
      </GridItem>
      <GridItem area={"main"}>{main && <ReactAsset {...main} />}</GridItem>
      <GridItem area={"footer"}>
        {footer && <ReactAsset {...footer} />}
      </GridItem>
    </Grid>
  );
};
