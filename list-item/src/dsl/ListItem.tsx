import React from "react";
import { AssetPropsWithChildren, Asset } from "@player-tools/dsl";
import { ListAsset } from "../types";

export const ListItem = (props: AssetPropsWithChildren<ListAsset>) => {
  return (
    <Asset type="list-item" {...props}>
      {props.columnsData.map((data, index) => (
        <Asset key={index} {...data} />
      ))}
      <ListItem data={props} />
    </Asset>
  );
};
