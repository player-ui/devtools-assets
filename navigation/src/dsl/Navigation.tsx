import React from "react";
import { AssetPropsWithChildren, Asset } from "@player-tools/dsl";
import { NavigationAsset } from "../types";

export const Navigation = (
  props: Omit<AssetPropsWithChildren<NavigationAsset>, "value"> & {
    value?: string;
  }
) => <Asset type="navigation" {...props}></Asset>;
