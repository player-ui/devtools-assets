import { Grid, GridItem } from "@chakra-ui/react";
import { ReactAsset } from "@player-ui/react";
import React from "react";
import type { StackedViewView } from "../types";

export const StackedViewComponent = (props: StackedViewView) => {
  const { header, main, footer } = props;

  return (
    <Grid
      h="100%"
      gap="4"
      templateAreas={'"header" "main" "footer"'}
      width="full"
    >
      <GridItem w={"100%"} area={"header"}>
        {header && <ReactAsset {...header} />}
      </GridItem>
      <GridItem w={"100%"} area={"main"}>
        {main && <ReactAsset {...main} />}
      </GridItem>
      <GridItem w={"100%"} area={"footer"}>
        {footer && <ReactAsset {...footer} />}
      </GridItem>
    </Grid>
  );
};
