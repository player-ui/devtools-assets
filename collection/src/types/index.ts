import { Asset, AssetWrapper } from "@player-ui/types";

export interface CollectionAsset extends Asset<"collection"> {
  /** list of assets in the collection */
  values?: Array<AssetWrapper>;
}
