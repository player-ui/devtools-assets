import React from "react";
import { AssetPropsWithChildren, Asset } from "@player-tools/dsl";
import { ListAssetType } from "../types";

export const List = (props: AssetPropsWithChildren<ListAssetType>) => (
  <Asset type={"list"} {...props}></Asset>
);
