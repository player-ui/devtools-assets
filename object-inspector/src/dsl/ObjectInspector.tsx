import React from "react";
import { AssetPropsWithChildren, Asset, createSlot } from "@player-tools/dsl";
import type { Asset as AssetType } from "@player-ui/player";
import { Text } from "@devtools-ui/text";
import { Collection } from "@devtools-ui/collection";
import type { ObjectInspectorAsset } from "../types";

export const ObjectInspector = (
  props: AssetPropsWithChildren<ObjectInspectorAsset>
) => {
  const { children, ...rest } = props;

  return (
    <Asset type="object-inspector" {...rest}>
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

ObjectInspector.Label = createSlot({
  name: "label",
  TextComp: Text,
  CollectionComp,
  isArray: true,
  wrapInAsset: true,
});
