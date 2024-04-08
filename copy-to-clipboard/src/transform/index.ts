import type { TransformFunction } from "@player-ui/player";
import { CopyToClipboardAsset, TransformedCopyToClipboard } from "../types";

/**
 * Platform-agnostic transform function that takes the properties we get from the Player Content (DSL > JSON)
 * and embeds Player state and methods:
 */
export const copyToClipboardTransform: TransformFunction<
  CopyToClipboardAsset,
  TransformedCopyToClipboard
> = (asset, options) => ({
  ...asset,
  data:
    asset.binding === undefined
      ? ""
      : JSON.stringify(
          options.data.model.get(asset.binding, {
            includeInvalid: true,
            formatted: false,
          }),
          null,
          2
        ),
});
