import { Asset, AssetWrapper } from "@player-ui/types";

export interface ObjectInspectorAsset<AnyTextAsset extends Asset = Asset>
  extends Asset<"object-inspector"> {
  /** Object to inspect */
  data: unknown;

  /** A text-like asset for the action's label */
  label?: AssetWrapper<AnyTextAsset>;
}
