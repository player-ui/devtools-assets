import React from "react";
import { AssetPropsWithChildren, Asset, createSlot } from "@player-tools/dsl";
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

Collection.Values = createSlot({
  name: "values",
  TextComp: Text,
  isArray: true,
  wrapInAsset: true,
});
