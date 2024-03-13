import React from "react";
import { Flex } from "@chakra-ui/react";
import { ReactAsset } from "@player-ui/react";
import { CollectionAsset } from "../types";

export const CollectionComponent = (props: CollectionAsset) => {
  return (
    <Flex direction="column" gap="5">
      {props.values?.map((a) => (
        <ReactAsset key={a.asset.id} {...a} />
      ))}
    </Flex>
  );
};
