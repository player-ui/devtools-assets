import type { Asset, AssetWrapper } from "@player-ui/types";

export interface RadioItemAsset<AnyAsset extends Asset = Asset> {
  /** Value */
  value: string;
  /** Label */
  label: AssetWrapper<AnyAsset>;
}

export interface RadioGroupAsset<AnyAsset extends Asset = Asset>
  extends Asset<"radio-group"> {
  /** list of assets in the collection */
  values?: Array<RadioItemAsset<AnyAsset>>;
  /** Label */
  label?: AssetWrapper<AnyAsset>;
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
