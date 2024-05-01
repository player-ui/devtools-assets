import type { Asset, AssetWrapper } from "@player-ui/types";
import type { TextAsset } from "@devtools-ui/text";

type RadioItem = {
  /** String of the radio text */
  value: string;
  /** String of the radio check value */
  radio: string;
  /** The ID of the Radio item */
  id: string;
  /** The asset type */
  type: string
}

export interface RadioGroupAsset extends Asset<"radio-group"> {
  /** list of assets in the collection */
  values?: Array<AssetWrapper<RadioItem>>;
  /** Label */
  label?: AssetWrapper<TextAsset>;
  /** Dot sepparated string Representation of a path within the data-model */
  binding?: string;
}

/** A stateful instance of the asset */
export interface TransformedRadioGroup extends RadioGroupAsset {
  /** A function to commit the new value to the data-model */
  setRadio: (newValue: boolean) => void;
  /** The current value of the radio group from the data-model */
  value: string;
}
