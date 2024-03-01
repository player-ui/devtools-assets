import { Asset, AssetWrapper } from "@player-ui/types";

export type JSONArray = JSONValue[];

export type JSONObject = { [key: string]: JSONValue };

export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONObject
  | JSONArray;

export interface ObjectInspectorAsset<AnyAsset extends Asset = Asset>
  extends Asset<"object-inspector"> {
  /** Object to inspect */
  data: JSONValue;
  /** A text-like asset for the action's label */
  label?: AssetWrapper<AnyAsset>;
}
