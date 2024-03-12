import React from "react";
import { AssetPropsWithChildren, Asset } from "@player-tools/dsl";
import type { ObjectInspectorAsset } from "../types";
import { LabelSlot } from "@devtools-ui/slots";
export const ObjectInspector = (
  props: AssetPropsWithChildren<ObjectInspectorAsset>
) => {
  return <Asset type="object-inspector" {...props}></Asset>;
};
ObjectInspector.Label = LabelSlot;
