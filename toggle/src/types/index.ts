import { Asset, AssetWrapper } from "@player-ui/types";
import type { TextAsset } from "@devtools-ui/text";

export interface ToggleAsset extends Asset<"toggle"> {
  // DSL properties
  // /** Value */
  // value?: AssetWrapper;
  // /** list of assets in the collection */
  // values?: Array<AssetWrapper>;
  /** Label */
  label?: AssetWrapper<TextAsset>;
  // /** Callable function that allow dynamic behavior for the view */
  // exp?: Expression;
  /** Dot sepparated string Representation of a path within the data-model */
  binding?: string;
}

/** A stateful instance of the asset */
export interface TransformedToggle extends ToggleAsset {
  // The result of the transformation (transform/index.ts)
    /** A function to commit the new value to the data-model */
    setCheck: (newValue: Boolean) => void;
    /** The current value of the input from the data-model */
    value: Boolean;
}
