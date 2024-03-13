import React from "react";
import { AssetPropsWithChildren, Asset, createSlot } from "@player-tools/dsl";
import { NavigationAsset } from "../types";
import { Text } from "@devtools-ui/text";
import { Collection } from "@devtools-ui/collection";

export const Navigation = (props: AssetPropsWithChildren<NavigationAsset>) => (
  <Asset type="navigation" {...props}></Asset>
);

Navigation.Actions = createSlot({
  name: "actions",
  TextComp: Text,
  CollectionComp: Collection,
  isArray: true,
  wrapInAsset: true,
});
