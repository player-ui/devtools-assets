import type { TextAsset } from "@devtools-ui/text";
import { Asset, Schema, AssetWrapper } from "@player-ui/types";
import { ValidationResponse } from "@player-ui/player";

export type InputSize = "x-small" | "small" | "medium" | "large" | "full-width";

type ValueType = string | undefined;
export interface InputAsset extends Asset<"input"> {
  /** The location in the data-model to store the data */
  binding: ValueType;

  /** A text asset for the action's label */
  label?: AssetWrapper<TextAsset>;

  /** Size of the Input */
  size?: InputSize;

  /** Placeholder of the Input */
  placeholder?: string;

  /** Max character length in the Input */
  maxLength?: number;
}

export interface TransformedInput extends InputAsset {
  /** A function to commit the new value to the data-model */
  set: (newValue: ValueType) => void;

  /** A function to format a value */
  format: (newValue: ValueType) => ValueType;

  /** The current value of the input from the data-model */
  value: ValueType;

  /** Any validation associated with the current input's value */
  validation?: ValidationResponse;

  /** The dataType defined from the schema */
  dataType?: Schema.DataType;
}
