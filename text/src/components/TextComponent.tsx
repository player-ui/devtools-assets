import React from "react";
import { Text } from "@chakra-ui/react";
import { TextAsset } from "../types";

export const TextComponent = ({ value, size, as }: TextAsset) => (
  <Text size={size} as={as}>
    {value}
  </Text>
);
