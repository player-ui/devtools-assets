import { Asset, Schema, Expression } from "@player-ui/types";
import { ValidationResponse } from "@player-ui/player";

export interface Evaluation {
  /** The unique key for the expression */
  id: string;
  /** The expression itself */
  expression: string;
  /** The result for a given expression */
  result?: string;
  /** Whether there were any errors with the result */
  severity?: "error" | "success";
}

type ValueType = string | undefined;

export interface ConsoleAsset extends Asset<"console"> {
  /** The location in the data-model to store the pre-eval expression */
  exp: Expression;

  /** The location in the data-model to store the post-eval expressions history */
  binding: ValueType;
}

export interface TransformedConsole extends ConsoleAsset {
  /** A stateful instance of evaluations */
  history: Evaluation[];

  /** A method to evaluate the expression */
  evaluate: () => void;
}
