import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  createSlot,
  BindingTemplateInstance,
} from "@player-tools/dsl";
import { InputAsset } from "../types";
import { Text } from "@devtools-ui/text";

export const Input = (
  props: Omit<AssetPropsWithChildren<InputAsset>, "binding"> & {
    /** The binding */
    binding: BindingTemplateInstance;
  }
) => {
  const { children, binding, ...rest } = props;
  return (
    <Asset type="input" {...rest}>
      <property name="binding">{binding.toValue()}</property>
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

Input.Note = createSlot({
  name: "note",
  TextComp: Text,
  isArray: false,
  wrapInAsset: true,
});
