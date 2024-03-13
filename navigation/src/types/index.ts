import { Asset, AssetWrapper } from "@player-ui/types";

/** Navigation between flow's views */
export interface NavigationAsset extends Asset<"navigation"> {
  actions?: Array<AssetWrapper>;
}
