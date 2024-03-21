import { Asset, AssetWrapper } from "@player-ui/types";
import { TextAsset } from "@devtools-ui/text";

export interface ConsoleExpression {
  /** The unique key for the expression */
  id: string;
  /** The expression itself */
  expression: string;
  /** The result for a given expression */
  result?: any;
  /** Whether there were any errors with the result */
  severity?: "error" | "warning";
}

type ValueType = string | undefined;

export interface ConsoleAsset extends Asset<"console"> {
  /** The location in the data-model to store the pre-eval expression */
  expressionBinding: ValueType;

  /** The location in the data-model to store the post-eval expressions history */
  historyBinding?: ValueType;

  /** The history of each evalued expression */
  evaluations?: Array<ConsoleExpression>;

  /** A function used to evalue an expression from the console. */
  execute: (expression: string) => any;
}

export interface TransformedConsole extends ConsoleAsset {
  /** The current value of the pre-eval expression from the data-model */
  expression?: ValueType;

  /** The history of each executed expression */
  history?: Array<AssetWrapper<TextAsset & ConsoleExpression>>;
}
