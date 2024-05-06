import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  createSlot,
  BindingTemplateInstance,
  WithTemplateTypes,
  WithChildren,
  toJsonProperties,
} from "@player-tools/dsl";
import type { Asset as AssetType } from "@player-ui/player";
import { Text } from "@devtools-ui/text";
import type { RadioGroupAsset, RadioItemAsset } from "../types";

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
      {children}
    </Asset>
  );
};

export const RadioItem = (
  props: Partial<WithChildren<WithTemplateTypes<RadioItemAsset>>>
) => {
  const { children, ...rest } = props;
  return (
    <obj>
      {toJsonProperties(rest)}
      {children}
    </obj>
  );
};

RadioItem.Label = createSlot({
  name: "label",
  TextComp: Text,
  isArray: false,
  wrapInAsset: true,
});

const RadioGroupValues = (props: AssetPropsWithChildren<AssetType>) => {
  return (
    <property name="values">
      <array {...props} />
    </property>
  );
};

RadioGroup.Label = createSlot({
  name: "label",
  TextComp: Text,
  isArray: false,
  wrapInAsset: true,
});

RadioGroup.Values = RadioGroupValues;
RadioGroupValues.Value = RadioItem;
