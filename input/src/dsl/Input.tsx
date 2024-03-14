import React from "react";
import { AssetPropsWithChildren, Asset, createSlot } from "@player-tools/dsl";
import { InputAsset } from "../types";
import { Text } from "@devtools-ui/text";

export const Input = (
  props: Omit<AssetPropsWithChildren<InputAsset>, "binding"> & {
    binding?: string;
  }
) => {
  const { children, binding, ...rest } = props;
  return (
    <Asset type="input" {...rest}>
      <property name="binding">{binding}</property>
      {children}
    </Asset>
  );
};

Input.Label = createSlot({
  name: "label",
  TextComp: Text,
  isArray: false,
  wrapInAsset: true,
});
