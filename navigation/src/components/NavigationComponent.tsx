import React from "react";
import { NavigationAsset } from "../types";
import { ButtonGroup } from "@chakra-ui/react";
import { ReactAsset } from "@player-ui/react";

export const NavigationComponent = (props: NavigationAsset) => {
  const { actions, ...rest } = props;

  return (
    <ButtonGroup spacing={2} {...rest}>
      {actions?.map((a) => (
        <ReactAsset key={a.asset.id} {...a} />
      ))}
    </ButtonGroup>
  );
};
