import { Asset, AssetWrapper } from "@player-ui/types";

export interface ObjectInspectorAsset<AnyTextAsset extends Asset = Asset>
  extends Asset<"object-inspector"> {
  /** binding pointing to the object to inspect */
  binding?: string;

  /** A text-like asset for the action's label */
  label?: AssetWrapper<AnyTextAsset>;

  /** Flag if a path-to-prop filter is to get included */
  filter?: boolean;
}

export interface TransformedObjectInspector extends ObjectInspectorAsset {
  /** A stateful instance of an action */
  /** object to inspect */
  data: unknown;
}
