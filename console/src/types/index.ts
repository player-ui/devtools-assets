import type { Asset, Expression } from "@player-ui/types";

export interface Evaluation {
  /** A unique key for this expression */
  id: string;

  /** The expression itself */
  expression: string;

  /** The result for a given expression */
  result?: unknown;

  /** Whether there were any errors with the result */
  severity?: "error" | "warning";
}

export interface ConsoleAsset extends Asset<"console"> {
  /** Evaluate expression */
  exp?: Expression;
  /** History binding */
  binding?: string;
}

/** A stateful instance of the asset */
export interface TransformedConsole extends ConsoleAsset {
  /** A stateful instance of an action */
  history: Evaluation[];
  /** A method to evaluate the expression */
  evaluate: () => void;
}
