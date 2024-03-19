import type { TextAsset } from "@devtools-ui/text";
import { AssetWrapper, Asset } from "@player-ui/types";
import { ConsoleExpression } from "@devtools-ds/console";

type ValueType = string | undefined;

export interface ConsoleAsset extends Asset<"console"> {
  /** A text asset for the action's label */
  expression?: ValueType;

  /** The history of each executed expression */
  evaluations?: Array<ConsoleExpression>;
  /** A function used to execute an expression from the console. */
  execute: (expression: string) => any;
}

export interface TransformedConsole extends ConsoleAsset {
  /** The history of each executed expression */
  history?: Array<ConsoleExpression>;
}
