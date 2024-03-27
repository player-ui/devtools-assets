import type {
  Asset,
  BeforeTransformFunction,
  TransformFunction,
} from "@player-ui/player";
import { compose, composeBefore } from "@player-ui/asset-transform-plugin";
import type { ConsoleAsset, TransformedConsole } from "../types";

export const transform: TransformFunction<ConsoleAsset, TransformedConsole> = (
  asset,
  options
) => {
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
    history:
      asset.binding === undefined
        ? undefined
        : options.data.model.get(asset.binding, {
            includeInvalid: true,
            formatted: false,
          }),
    evaluate() {
      if (asset.exp) {
        options.evaluate(asset.expression);
      }
    },
  };
};

/**
 * Appends `exp` to the plugins.stringResolver.propertiesToSkip array or creates it if it doesn't exist
 */
export const expPropTransform: BeforeTransformFunction<Asset> = (asset) => {
  const skipArray = asset.plugins?.stringResolver?.propertiesToSkip;

  if (skipArray && skipArray.indexOf("exp") > 1) {
    return asset;
  }

  return {
    ...asset,
    plugins: {
      ...asset.plugins,
      stringResolver: {
        ...asset?.plugins?.stringResolver,
        propertiesToSkip: [
          ...(asset.plugins?.stringResolver?.propertiesToSkip ?? []),
          "exp",
        ],
      },
    },
  };
};

export const consoleTransform = compose(
  transform,
  composeBefore(expPropTransform)
);
