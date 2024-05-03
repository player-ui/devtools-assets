import React from "react";
import { Radio } from "@chakra-ui/react";
import type { RadioItemAsset } from "../types";

export const RadioItemComponent = ({
  value,
  label,
  ...rest
}: RadioItemAsset) => (
  <div>
    <Radio value={value} {...rest}>
      {label}
    </Radio>
  </div>
);
