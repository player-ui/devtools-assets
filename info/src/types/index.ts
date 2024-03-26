import type { Asset, AssetWrapper, View } from "@player-ui/types";

export interface InfoView extends View<Asset<"info">> {
  /** Header */
  header?: AssetWrapper;
  /** Main */
  main?: AssetWrapper;
  /** Footer */
  footer?: AssetWrapper;
}
