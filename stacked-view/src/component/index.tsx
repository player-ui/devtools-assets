import { Grid, GridItem } from "@chakra-ui/react";
import { ReactAsset } from "@player-ui/react";
import React from "react";
import type { StackedViewView } from "../types";

export const StackedViewComponent = (props: StackedViewView) => {
  const { header, main, footer } = props;

  return (
    <Grid h="100%" w="100%" gap="4" templateAreas={'"header" "main" "footer"'}>
      <GridItem w={"full"} maxWidth={"100vh"} area={"header"}>
        {header && <ReactAsset {...header} />}
      </GridItem>
      <GridItem w={"full"} maxHeight={"70vh"} maxWidth={"100vh"} area={"main"}>
        {main && <ReactAsset {...main} />}
      </GridItem>
      <GridItem w={"full"} maxWidth={"100vh"} area={"footer"}>
        {footer && <ReactAsset {...footer} />}
      </GridItem>
    </Grid>
  );
};
