import React from "react";
import { Text } from "@chakra-ui/react";
import { ListAssetType } from "../types";
import { ListAsset, ListItem } from "@devtools-ui/list-item";

export const ListComponent = (props: ListAssetType) => {
  return (
    <div className="list">
      {props.data?.map((item: ListAsset, index) => {
        const data = {
          content: item.columnsData?.content ?? "content",
          type: item.columnsData?.type ?? "type",
          message: item.columnsData?.message ?? "message",
        };
        return <ListItem key={index} columnsData={data} />;
      })}
    </div>
  );
};
