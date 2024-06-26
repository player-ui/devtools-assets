import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  createSlot,
  BindingTemplateInstance,
} from "@player-tools/dsl";
import { Text } from "@devtools-ui/text";
import type { ToggleAsset } from "../types";

export const Toggle = (
  props: Omit<AssetPropsWithChildren<ToggleAsset>, "binding"> & {
    /** The binding as a tagged template instance */
    binding: BindingTemplateInstance;
  }
) => {
  const { children, binding, ...rest } = props;

  return (
    <Asset type="toggle" {...rest}>
      <property name="binding">{binding.toValue()}</property>
      {props.children}
    </Asset>
  );
};

Toggle.Label = createSlot({
  name: "label",
  TextComp: Text,
  isArray: false,
  wrapInAsset: true,
});
