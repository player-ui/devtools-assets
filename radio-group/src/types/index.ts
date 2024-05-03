import type { Asset, AssetWrapper } from "@player-ui/types";
import type { TextAsset } from "@devtools-ui/text";
import type { RadioItemAsset } from "@devtools-ui/radio-item";

export interface RadioGroupAsset extends Asset<"radio-group"> {
  /** list of assets in the collection */
  values?: Array<AssetWrapper<RadioItemAsset>>;
  /** Label */
  groupLabel?: AssetWrapper<TextAsset>;
  /** Dot sepparated string Representation of a path within the data-model */
  binding?: string;
}

/** A stateful instance of the asset */
export interface TransformedRadioGroup extends RadioGroupAsset {
  /** A function to commit the new value to the data-model */
  setRadio: (newValue: string) => void;
  /** The current value of the radio group from the data-model */
  value: string;
}
