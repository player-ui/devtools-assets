import React from "react";
import { AssetPropsWithChildren, Asset, createSlot } from "@player-tools/dsl";
import { NavigationAsset } from "../types";
import { Text } from "@devtools-ui/text";

export const Navigation = (
  props: Omit<AssetPropsWithChildren<NavigationAsset>, "value"> & {
    value?: string;
  }
) => <Asset type="navigation" {...props}></Asset>;

Navigation.Actions = createSlot({
  name: "actions",
  isArray: true,
  TextComp: Text,
  wrapInAsset: true,
});
