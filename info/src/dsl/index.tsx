import React from "react";
import { AssetPropsWithChildren, Asset, createSlot } from "@player-tools/dsl";
import type { Asset as AssetType } from "@player-ui/player";
import { Collection } from "@devtools-ui/collection";
import { Text } from "@devtools-ui/text";
import type { InfoView } from "../types";

/**
 * Defines the component DSL representation for the Info view.
 */
export const Info = (props: AssetPropsWithChildren<InfoView>) => {
  const { children, ...rest } = props;

  return (
    <Asset type="info" {...rest}>
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

Info.Header = createSlot({
  name: "header",
  TextComp: Text,
  CollectionComp,
  isArray: false,
  wrapInAsset: true,
});

Info.Main = createSlot({
  name: "main",
  TextComp: Text,
  CollectionComp,
  isArray: false,
  wrapInAsset: true,
});

Info.Footer = createSlot({
  name: "footer",
  TextComp: Text,
  CollectionComp,
  isArray: false,
  wrapInAsset: true,
});
