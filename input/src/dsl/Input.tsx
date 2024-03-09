import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  createSlot,
} from "@player-tools/dsl";
import { Text } from "@devtools-ui/text";
import { InputAsset } from "../types";

export const Input = (
  props: AssetPropsWithChildren<InputAsset>
) => {
  const { children, ...rest } = props;
  return (
    <Asset type="input" {...rest}>
      {children}
    </Asset>
  );
};

Input.Label = createSlot({
  wrapInAsset: true,
  name: "label",
  TextComp: Text,
});
