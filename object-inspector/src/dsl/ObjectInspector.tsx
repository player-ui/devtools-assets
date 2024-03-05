import React from "react";
import { Text } from "@devtools-ui/text";
import {
  AssetPropsWithChildren,
  Asset,
  createSlot,
  AssetWrapper,
} from "@player-tools/dsl";
import type { ObjectInspectorAsset } from "../types";
import { ObjectInspectorComponent } from "../components";

export const ObjectInspector = (
  props: AssetPropsWithChildren<ObjectInspectorAsset>
) => {
  return <Asset type="object-inspector" {...props}></Asset>;
};

ObjectInspector.Label = createSlot({
  wrapInAsset: true,
  name: "label",
  TextComp: Text,
});
