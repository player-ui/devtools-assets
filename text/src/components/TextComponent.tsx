import React from "react";
import { Text } from "@chakra-ui/react";
import { TextAsset } from "../types";

export const TextComponent = ({ value, size, as, id }: TextAsset) => (
  <div id={id}>
    <Text size={size} as={as}>
      {value}
    </Text>
  </div>
);
