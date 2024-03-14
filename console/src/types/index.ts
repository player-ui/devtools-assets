import type { TextAsset } from "@devtools-ui/text";
import { AssetWrapper, Asset } from "@player-ui/types";

type ValueType = string | undefined;

export interface ConsoleAsset extends Asset<"console"> {

  /** A text asset for the action's label */
  label?: AssetWrapper<TextAsset>;
}

export interface TransformedConsole extends ConsoleAsset {


  /** The current value of the input from the data-model */
  value: ValueType;


}
