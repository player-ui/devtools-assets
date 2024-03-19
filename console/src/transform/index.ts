import type { TransformFunction } from "@player-ui/player";
import type { ConsoleAsset, TransformedConsole } from "../types";

export const consoleTransform: TransformFunction<
  ConsoleAsset,
  TransformedConsole
> = (asset, options) => {
  return {
    ...asset,
    execute: asset.execute === undefined ? (exp) => exp : asset.execute,
  };
};
