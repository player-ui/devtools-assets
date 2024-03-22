import React from "react";
import { AssetPropsWithChildren, Asset, createSlot } from "@player-tools/dsl";
import type { Asset as AssetType } from "@player-ui/player";
import { Text } from "@devtools-ui/text";
import { Collection } from "@devtools-ui/collection";
import { NavigationAsset } from "../types";

export const Navigation = (props: AssetPropsWithChildren<NavigationAsset>) => {
  const { children, ...rest } = props;
  return (
    <Asset type="navigation" {...rest}>
      {children}
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

Navigation.Values = createSlot({
  name: "values",
  TextComp: Text,
  CollectionComp,
  isArray: true,
  wrapInAsset: true,
});
