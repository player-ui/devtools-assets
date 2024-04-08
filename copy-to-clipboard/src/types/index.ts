import type { Asset, AssetWrapper } from "@player-ui/types";

export interface CopyToClipboardAsset extends Asset<"copy-to-clipboard"> {
  /** Binding to the data to be copied */
  binding?: string;
  /** Button Label */
  label?: AssetWrapper;
}

/** A stateful instance of the asset */
export interface TransformedCopyToClipboard extends CopyToClipboardAsset {
  /** The stringified data to be copied */
  data: string;
}
