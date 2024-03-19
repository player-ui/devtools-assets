import React from "react";
import { AssetPropsWithChildren, Asset, createSlot } from "@player-tools/dsl";
import { Collection } from "@devtools-ui/collection";
import { Text } from "@devtools-ui/text";
import type { Asset as AssetType } from "@player-ui/player";
import { ConsoleAsset } from "../types";

export const Console = (props: AssetPropsWithChildren<ConsoleAsset>) => {
  return <Asset type="console">{props.children}</Asset>;
};

const CollectionComp = (props: AssetPropsWithChildren<AssetType>) => {
  return (
    <Collection>
      <Collection.Values>{props.children}</Collection.Values>
    </Collection>
  );
};

Console.Values = createSlot({
  name: "evaluations",
  TextComp: Text,
  CollectionComp,
  isArray: true,
  wrapInAsset: true,
});
