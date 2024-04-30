import type { Asset } from "@player-ui/types";

export interface RadioGroupAsset extends Asset<"radio-group"> {
  // DSL properties
  // /** Value */
  // value?: AssetWrapper;
  // /** list of assets in the collection */
  // values?: Array<AssetWrapper>;
  // /** Label */
  // label?: AssetWrapper<TextAsset>;
  // /** Callable function that allow dynamic behavior for the view */
  // exp?: Expression;
  // /** Dot sepparated string Representation of a path within the data-model */
  // binding?: string;
}

/** A stateful instance of the asset */
export interface TransformedRadioGroup extends RadioGroupAsset {
  // The result of the transformation (transform/index.ts)
}
