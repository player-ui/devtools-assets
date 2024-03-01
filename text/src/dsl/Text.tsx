import React from "react";
import { AssetPropsWithChildren, Asset } from "@player-tools/dsl";
import { TextAsset } from "../types";

export const Text = (
  props: Omit<AssetPropsWithChildren<TextAsset>, "value"> & {
    value?: string;
  }
) => (
  <Asset type="text" {...props}>
    <property name="value">{props.children}</property>
  </Asset>
);
