import { Asset, AssetWrapper } from "@player-ui/types";

export interface ListAsset extends Asset<"list"> {
  /** List items */
  values?: Array<AssetWrapper>;

  /** List metadata */
  metaData?: {
    /** Ordered list */
    ordered?: boolean;
  };
}
