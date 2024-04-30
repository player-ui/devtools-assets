import type { TransformFunction } from "@player-ui/player";
import { ToggleAsset, TransformedToggle } from "../types";

export const toggleTransform: TransformFunction<
  ToggleAsset,
  TransformedToggle
> = (asset, options) => {
  return {
    ...asset,
    setCheck(val) {
      if (asset.binding === undefined) {
        return;
      }

      return options.data.model.set([[asset.binding, val]]);
    },
    value:
      asset.binding === undefined ? "" : options.data.model.get(asset.binding),
  };
};
