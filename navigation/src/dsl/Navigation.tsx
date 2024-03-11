import React from "react";
import { AssetPropsWithChildren, Asset } from "@player-tools/dsl";
import { NavigationAsset } from "../types";
import { NavigationComponent } from "../components";

export const Navigation = (
  props: Omit<AssetPropsWithChildren<NavigationAsset>, "value"> & {
    value?: string;
  }
) => (
  <Asset type="navigation" {...props}>
    <NavigationComponent actions={props.actions} id={""} type={"navigation"} />
  </Asset>
);
