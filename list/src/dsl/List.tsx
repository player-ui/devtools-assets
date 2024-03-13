import React from "react";
import { AssetPropsWithChildren, Asset, createSlot } from "@player-tools/dsl";
import { Text } from "@devtools-ui/text";
import { Collection } from "@devtools-ui/collection";
import { ListAsset } from "../types";

export const List = (props: AssetPropsWithChildren<ListAsset>) => (
  <Asset type={"list"} {...props}></Asset>
);

List.Values = createSlot({
  name: "values",
  TextComp: Text,
  CollectionComp: Collection,
  isArray: true,
  wrapInAsset: true,
});
