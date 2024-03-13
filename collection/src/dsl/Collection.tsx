import React from "react";
import { AssetPropsWithChildren, Asset } from "@player-tools/dsl";
import { CollectionAsset } from "../types";
import { ValuesSlot } from "@devtools-ui/slots";

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

Collection.Values = ValuesSlot;
