import React from "react";
import { NavigationAsset } from "../types";
import { Stack } from "@chakra-ui/react";
import { ReactAsset } from "@player-ui/react";

export const NavigationComponent = (props: NavigationAsset) => {
  const { actions, ...rest } = props;

  return (
    <Stack direction="row" spacing={4} {...rest}>
      {actions?.map((a) => (
        <ReactAsset key={a.asset.id} {...a} />
      ))}
    </Stack>
  );
};
