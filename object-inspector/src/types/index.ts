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

export interface ObjectInspectorAsset<AnyTextAsset extends Asset = Asset>
  extends Asset<"object-inspector"> {
  /** Object to inspect */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  /** A text-like asset for the action's label */
  label?: AssetWrapper<AnyTextAsset>;
}
