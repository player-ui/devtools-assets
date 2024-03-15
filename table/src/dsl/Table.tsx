import React from "react";
import {
  WithChildren,
  AssetPropsWithChildren,
  Asset,
  IDSuffixProvider,
  Slot,
} from "@player-tools/dsl";
import { TableType } from "../types";
import { Text } from "@devtools-ui/text";
import type { Asset as AssetType } from "@player-ui/player";
import { Collection } from "@devtools-ui/collection";

const CollectionComp = (props: AssetPropsWithChildren<AssetType>) => {
  return (
    <Collection>
      <Collection.Values>{props.children}</Collection.Values>
    </Collection>
  );
};

/** Values array slot without wrapping in an asset */
export const NonAssetValuesSlot = (props: WithChildren) => {
  return (
    <Slot
      isArray
      name="values"
      wrapInAsset={false}
      CollectionComp={CollectionComp}
      TextComp={Text}
      {...props}
    />
  );
};

export const Table = (props: AssetPropsWithChildren<TableType>) => {
  const { children, ...rest } = props;
  return (
    <Asset type={"table"} {...props}>
      <IDSuffixProvider suffix="table">{children}</IDSuffixProvider>
    </Asset>
  );
};

Table.Values = NonAssetValuesSlot;
