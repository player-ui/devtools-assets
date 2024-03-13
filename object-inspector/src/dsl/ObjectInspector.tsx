import React from "react";
import { AssetPropsWithChildren, Asset, createSlot } from "@player-tools/dsl";
import { Text } from "@devtools-ui/text";
import { Collection } from "@devtools-ui/collection";
import type { ObjectInspectorAsset } from "../types";

export const ObjectInspector = (
  props: AssetPropsWithChildren<ObjectInspectorAsset>
) => {
  return <Asset type="object-inspector" {...props} />;
};

ObjectInspector.Label = createSlot({
  name: "values",
  TextComp: Text,
  CollectionComp: Collection,
  isArray: true,
  wrapInAsset: true,
});
