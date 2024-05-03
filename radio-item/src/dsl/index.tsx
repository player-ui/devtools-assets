import React from "react";
import { AssetPropsWithChildren, Asset } from "@player-tools/dsl";
import type { RadioItemAsset } from "../types";

export const RadioItem = (
  props: Omit<AssetPropsWithChildren<RadioItemAsset>, "value"> & {
    value: string;
  }
) => (
  <Asset type="radio-item" {...props}>
    <property name="value">{props.value}</property>
    <property name="label">{props.label}</property>
  </Asset>
);
