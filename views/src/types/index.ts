import { Asset, AssetWrapper } from "@player-ui/types";
import React from "react";

export interface BaseViewTemplateProps<AnyAsset extends Asset = Asset>
  extends Asset<"base"> {
  /** Head actions on top of the screen */
  header?: AssetWrapper<AnyAsset>;
  /** Content for body section */
  main?: AssetWrapper<AnyAsset>;

  /** Bottom sections of the screen */
  footer?: AssetWrapper<AnyAsset>;
}
