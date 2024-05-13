import type { TransformFunction } from "@player-ui/player";
import { FlameGraphAsset, TransformedFlameGraph } from "../types";

/**
 * Platform-agnostic transform function that takes the properties we get from the Player Content (DSL > JSON)
 * and embeds Player state and methods:
 */
export const flameGraphTransform: TransformFunction<
  FlameGraphAsset,
  TransformedFlameGraph
> = (asset, options) => {
  return {
    ...asset,
    data: asset.binding
      ? options.data.model.get(asset.binding, {
          includeInvalid: true,
          formatted: false,
        })
      : undefined,
  };
};
