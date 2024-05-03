import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  createSlot,
  BindingTemplateInstance,
} from "@player-tools/dsl";
import type { Asset as AssetType } from "@player-ui/player";
import { Collection } from "@devtools-ui/collection";
import { Text } from "@devtools-ui/text";
import type { RadioGroupAsset } from "../types";

export const RadioGroup = (
  props: Omit<AssetPropsWithChildren<RadioGroupAsset>, "binding"> & {
    /** The binding as a tagged template instance */
    binding: BindingTemplateInstance;
  }
) => {
  const { children, binding, ...rest } = props;

  return (
    <Asset type="radio-group" {...rest}>
      <property name="binding">{binding.toValue()}</property>
      {props.children}
    </Asset>
  );
};

const CollectionComp = (props: AssetPropsWithChildren<AssetType>) => {
  return (
    <Collection>
      <Collection.Values>{props.children}</Collection.Values>
    </Collection>
  );
};

RadioGroup.Label = createSlot({
  name: "groupLabel",
  TextComp: Text,
  isArray: false,
  wrapInAsset: true,
});

RadioGroup.Values = createSlot({
  name: "values",
  CollectionComp,
  isArray: true,
  wrapInAsset: true,
});
