import React from "react";
import { Radio } from "@chakra-ui/react";
import type { RadioItemAsset } from "../types";

export const RadioItemComponent = ({ value, label }: RadioItemAsset) => (
  <div>
    <Radio value={value}>{label}</Radio>
  </div>
);
