import type { TransformFunction } from "@player-ui/player";
import type {
  ConsoleAsset,
  TransformedConsole,
  ConsoleExpression,
} from "../types";

export const consoleTransform: TransformFunction<
  ConsoleAsset,
  TransformedConsole
> = (asset, options) => {
  return {
    ...asset,
    expression:
      asset.expressionBinding === undefined
        ? ""
        : options.data.model.get(asset.expressionBinding, {
            includeInvalid: true,
          }),
    setExpression(val) {
      if (asset.expressionBinding === undefined) {
        return;
      }

      return options.data.model.set([[asset.expressionBinding, val]]);
    },
    setHistory(val) {
      if (asset.historyBinding === undefined) {
        return;
      }

      const currentHistory: Array<ConsoleExpression> =
        options.data.model.get(asset.historyBinding) || [];

      return options.data.model.set([
        [asset.historyBinding, [...currentHistory, val]],
      ]);
    },
    history: asset.evaluations
      ? asset.evaluations.map((e) => ({
          expression: { asset: { ...e, type: "text", value: e.expression } },
          ...(e.result
            ? { result: { asset: { ...e, type: "text", value: e.result } } }
            : {}),
        }))
      : [],
    execute: asset.execute === undefined ? (exp) => exp : asset.execute,
  };
};
