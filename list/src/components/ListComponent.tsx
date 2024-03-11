import React from "react";
import { Text } from "@chakra-ui/react";
import { ListAsset } from "../types";
import { ListItem } from "devtools-ui/list-item";

export const ListComponent = (props: ListAsset) => {
  return (
    <div className="list">
      {props.items.map((item, index) => (
        <ListItem key={index} data={item} />
      ))}
    </div>
  );
};
