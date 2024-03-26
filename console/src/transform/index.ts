import type { TransformFunction } from "@player-ui/player";
import type { ConsoleAsset, TransformedConsole } from "../types";

export const consoleTransform: TransformFunction<
  ConsoleAsset,
  TransformedConsole
> = (asset, options) => {
  return {
    ...asset,
    value:
      asset.expression === undefined
        ? undefined
        : options.data.model.get(asset.expression, {
            includeInvalid: true,
            formatted: false,
          }),
    set(val) {
      if (asset.expression === undefined) {
        return;
      }

      return options.data.model.set([[asset.expression, val]]);
    },
    format(val) {
      if (asset.expression === undefined) {
        return val;
      }

      return options.data.format(asset.expression, val);
    },
    validation:
      asset.expression === undefined
        ? undefined
        : options.validation?.get(asset.expression, { track: true }),
    dataType:
      asset.expression === undefined
        ? undefined
        : options.validation?.type(asset.expression),
  };
};
