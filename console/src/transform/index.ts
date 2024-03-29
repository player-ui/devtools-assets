import type {
  Asset,
  BeforeTransformFunction,
  TransformFunction,
} from "@player-ui/player";
import { compose, composeBefore } from "@player-ui/asset-transform-plugin";
import { ConsoleAsset, TransformedConsole } from "../types";

/**
 * Platform-agnostic transform function that takes the properties we get from the Player Content (DSL > JSON)
 * and embeds Player state and methods:
 */
export const transform: TransformFunction<ConsoleAsset, TransformedConsole> = (
  asset,
  options
) => {
  return {
    ...asset,
    history:
      asset.binding === undefined
        ? undefined
        : options.data.model.get(asset.binding, {
            includeInvalid: true,
            formatted: false,
          }),
    evaluate() {
      if (asset.exp) {
        options.evaluate(asset.exp);
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
