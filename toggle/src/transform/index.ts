import type { TransformFunction } from "@player-ui/player";
import { ToggleAsset, TransformedToggle } from "../types";

/**
 * Platform-agnostic transform function that takes the properties we get from the Player Content (DSL > JSON)
 * and embeds Player state and methods:
 */
export const toggleTransform: TransformFunction<ToggleAsset, TransformedToggle> = (
  asset,
  options
) => {
  // GET/SET properties from the data model and/or embed Player methods
  // e.g.: options.data.model.get(asset.binding, { includeInvalid: true, formatted: false });
  // e.g.: options.evaluate(asset.exp);
  // e.g.: options.transition?.(asset.value, { force: skipValidation });
  return {
    ...asset,
    setCheck(val) {
      if (asset.binding === undefined) {
        return;
      }

      return options.data.model.set([[asset.binding, val]], {
        formatted: true,
      });
    },
    value:
      asset.binding === undefined
        ? ""
        : options.data.model.get(asset.binding, {
            includeInvalid: true,
            formatted: true,
          }),
  };
};
