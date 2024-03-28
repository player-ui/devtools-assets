import type { TransformFunction } from "@player-ui/player";
import { TableAsset, TransformedTable } from "../types";

/**
 * Platform-agnostic transform function that takes the properties we get from the Player Content (DSL > JSON)
 * and embeds Player state and methods:
 */
export const tableTransform: TransformFunction<TableAsset, TransformedTable> = (
  asset,
  options
) => {
  return {
    ...asset,
    rows:
      asset.binding === undefined
        ? []
        : options.data.model.get(asset.binding, {
            includeInvalid: true,
            formatted: false,
          }),
  };
};
