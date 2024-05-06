import type { TransformFunction } from "@player-ui/player";
import { RadioGroupAsset, TransformedRadioGroup } from "../types";

export const radioGroupTransform: TransformFunction<
  RadioGroupAsset,
  TransformedRadioGroup
> = (asset, options) => {
  return {
    ...asset,
    setRadio(val) {
      if (asset.binding === undefined) {
        return;
      }

      return options.data.model.set([[asset.binding, val]]);
    },
    value:
      asset.binding === undefined ? "" : options.data.model.get(asset.binding),
  };
};
