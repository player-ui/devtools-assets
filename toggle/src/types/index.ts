import { Asset, AssetWrapper, Expression } from "@player-ui/types";
import type { TextAsset } from "@devtools-ui/text";

export interface ToggleAsset extends Asset<"toggle"> {
  /** Label */
  label?: AssetWrapper<TextAsset>;
  /** Dot sepparated string Representation of a path within the data-model */
  binding?: string;
}

/** A stateful instance of the asset */
export interface TransformedToggle extends ToggleAsset {
  // The result of the transformation (transform/index.ts)
  /** A function to commit the new value to the data-model */
  setCheck: (newValue: boolean) => void;
  /** The current value of the toggle from the data-model */
  value: boolean;
}
