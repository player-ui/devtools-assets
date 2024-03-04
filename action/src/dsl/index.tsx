import React from "react";
import { AssetPropsWithChildren, Asset, createSlot } from "@player-tools/dsl";
import { ObjectInspectorAsset } from "../types";

export const Action = (
  props: AssetPropsWithChildren<ObjectInspectorAsset>
) => <Asset type="action" {...props} />;

Action.Label = createSlot({
  wrapInAsset: true,
  name: "label",
  TextComp: Text,
});
