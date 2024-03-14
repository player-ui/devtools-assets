import React from "react";
import { AssetPropsWithChildren, Asset, createSlot } from "@player-tools/dsl";
import { Text } from "@devtools-ui/text";
import type { Asset as AssetType } from "@player-ui/player";
import { Collection } from "@devtools-ui/collection";
import { ListAsset } from "../types";

export const List = (props: AssetPropsWithChildren<ListAsset>) => (
  <Asset type={"list"} {...props}></Asset>
);

const CollectionComp = (props: AssetPropsWithChildren<AssetType>) => {
  return (
    <Collection>
      <Collection.Values>{props.children}</Collection.Values>
    </Collection>
  );
};

List.Values = createSlot({
  name: "values",
  TextComp: Text,
  CollectionComp,
  isArray: true,
  wrapInAsset: true,
});
