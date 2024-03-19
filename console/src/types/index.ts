import type { TextAsset } from "@devtools-ui/text";
import { AssetWrapper, Asset } from "@player-ui/types";

type ValueType = string | undefined;

export interface ConsoleAsset extends Asset<"console"> {
  /** A text asset for the action's label */
  expression?: ValueType;

  /** The history of each executed expression */
  history?: Array<AssetWrapper<TextAsset>>;
  /** A function used to execute an expression from the console. */
  execute: (expression: string) => any;
}

export interface TransformedConsole extends ConsoleAsset {
  /** The current value of the input from the data-model */
  result: ValueType;
}
