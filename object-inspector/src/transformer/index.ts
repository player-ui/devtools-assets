import type { TransformFunction } from "@player-ui/player";
import { ObjectInspectorAsset, TransformedObjectInspector } from "../types";

/**
 * Access the object from the data model
 */
export const objectInspectorTransform: TransformFunction<
  ObjectInspectorAsset,
  TransformedObjectInspector
> = (asset, options) => {
  return {
    ...asset,
    data:
      asset.binding === undefined
        ? undefined
        : options.data.model.get(asset.binding, {
            includeInvalid: true,
            formatted: false,
          }),
  };
};
