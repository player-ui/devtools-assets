import React from "react";
import { AssetPropsWithChildren, Asset, createSlot } from "@player-tools/dsl";
import type { Asset as AssetType } from "@player-ui/player";
import { Collection } from "@devtools-ui/collection";
import { Text } from "@devtools-ui/text";
import type { StackedViewView } from "../types";

/**
 * Defines the component DSL representation for the StackedView view.
 */
export const StackedView = (props: AssetPropsWithChildren<StackedViewView>) => {
  const { children, ...rest } = props;

  return (
    <Asset type="stacked-view" {...rest}>
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

StackedView.Header = createSlot({
  name: "header",
  TextComp: Text,
  CollectionComp,
  isArray: false,
  wrapInAsset: true,
});

StackedView.Main = createSlot({
  name: "main",
  TextComp: Text,
  CollectionComp,
  isArray: false,
  wrapInAsset: true,
});

StackedView.Footer = createSlot({
  name: "footer",
  TextComp: Text,
  CollectionComp,
  isArray: false,
  wrapInAsset: true,
});
