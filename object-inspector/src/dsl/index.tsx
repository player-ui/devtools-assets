import React from "react";
import { AssetPropsWithChildren, Asset, createSlot } from "@player-tools/dsl";
import { ObjectInspectorAsset } from "../types";

export const ObjectInspector = (
  props: AssetPropsWithChildren<ObjectInspectorAsset>
) => <Asset type="object-inspector" {...props} />;

ObjectInspector.Label = createSlot({
  wrapInAsset: true,
  name: "label",
  TextComp: Text,
});
