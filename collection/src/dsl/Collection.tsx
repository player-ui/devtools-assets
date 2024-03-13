import React from "react";
import { AssetPropsWithChildren, Asset, createSlot } from "@player-tools/dsl";
import type { Asset as AssetType } from "@player-ui/player";
import { CollectionAsset } from "../types";
import { Text } from "@devtools-ui/text";

export const Collection = (
  props: Omit<AssetPropsWithChildren<CollectionAsset>, "value"> & {
    value?: string;
  }
) => {
  const { children, ...rest } = props;
  return (
    <Asset type="collection" {...rest}>
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

Collection.Values = createSlot({
  name: "values",
  TextComp: Text,
  CollectionComp,
  isArray: true,
  wrapInAsset: true,
});
