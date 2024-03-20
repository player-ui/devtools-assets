import type { TransformFunction } from "@player-ui/player";
import type { ConsoleAsset, TransformedConsole } from "../types";

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
            formatted: true,
          }),
    execute: asset.execute === undefined ? (exp) => exp : asset.execute,
  };
};
