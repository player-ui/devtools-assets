import { Asset, Schema } from "@player-ui/types";
import { ValidationResponse } from "@player-ui/player";

export interface ConsoleExpression {
  /** The unique key for the expression */
  id: string;
  /** The expression itself */
  expression: string;
  /** The result for a given expression */
  result?: string;
  /** Whether there were any errors with the result */
  outcome?: "error" | "success";
}

type ValueType = string | undefined;

export interface ConsoleAsset extends Asset<"console"> {
  /** The location in the data-model to store the pre-eval expression */
  expression: ValueType;

  /** The location in the data-model to store the post-eval expressions history */
  history: ValueType;

  /** The history of each evalued expression */
  evaluations?: Array<ConsoleExpression>;
}

export interface TransformedConsole extends ConsoleAsset {
  /** The current value of the pre-eval expression from the data-model */
  value: ValueType;

  /** A function to commit the pre-eval epxression to the data-model */
  set: (newValue: ValueType) => void;

  /** A function to format a value */
  format: (newValue: ValueType) => ValueType;

  /** Any validation associated with the current input's value */
  validation?: ValidationResponse;

  /** The dataType defined from the schema */
  dataType?: Schema.DataType;
}
