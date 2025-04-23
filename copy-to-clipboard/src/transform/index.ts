import type { TransformFunction, Resolve } from "@player-ui/player";
import { CopyToClipboardAsset, TransformedCopyToClipboard } from "../types";

const getData = (
  asset: CopyToClipboardAsset,
  options: Resolve.NodeResolveOptions
): string => {
  if (asset.binding === undefined) {
    return "";
  }
  const obj = options.data.model.get(asset.binding, {
    includeInvalid: true,
    formatted: false,
  });
  return typeof obj === "string" ? obj : JSON.stringify(obj, null, 2);
};

/**
 * Platform-agnostic transform function that takes the properties we get from the Player Content (DSL > JSON)
 * and embeds Player state and methods:
 */
export const copyToClipboardTransform: TransformFunction<
  CopyToClipboardAsset,
  TransformedCopyToClipboard
> = (asset, options) => ({
  ...asset,
  data: getData(asset, options),
});
