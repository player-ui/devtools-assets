import React from "react";
import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import { ListAsset } from "../types";
import { ReactAsset } from "@player-ui/react";

export const ListComponent = (props: ListAsset) => {
  return props.metaData?.ordered ? (
    <UnorderedList>
      {props.values &&
        props.values.map(({ asset }) => (
          <ListItem key={asset.id}>
            <ReactAsset {...asset} />
          </ListItem>
        ))}
    </UnorderedList>
  ) : (
    <OrderedList>
      {props.values &&
        props.values.map(({ asset }) => (
          <ListItem key={asset.id}>
            <ReactAsset {...asset} />
          </ListItem>
        ))}
    </OrderedList>
  );
};
