import React from "react";
import { NavigationAsset } from "../types";
import { Stack } from "@chakra-ui/react";
import { ReactAsset } from "@player-ui/react";

export const NavigationComponent = (props: NavigationAsset) => {
  const { values, ...rest } = props;

  return (
    <Stack direction="row" spacing={4} {...rest}>
      {values?.map((a) => (
        <ReactAsset w="100%" key={a.asset.id} {...a} />
      ))}
    </Stack>
  );
};
