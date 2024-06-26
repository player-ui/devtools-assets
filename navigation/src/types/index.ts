import { Asset, AssetWrapper } from "@player-ui/types";

/** Navigation between flow's views */
export interface NavigationAsset extends Asset<"navigation"> {
  values?: Array<AssetWrapper>;
}
