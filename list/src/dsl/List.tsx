import React from "react";
import { AssetPropsWithChildren, Asset } from "@player-tools/dsl";
import { ListAsset } from "../types";
import { ListComponent } from "../components/index";
export const List = (
  props: Omit<AssetPropsWithChildren<ListAsset>, "value"> & {
    value?: string;
  }
) => (
  <Asset type="list" {...props}>
    <ListComponent items={props.items} id={""} type={"text"} />
  </Asset>
);
