import React from "react";
import { Text } from "@devtools-ui/text";
import { ListAsset } from "../types";

export const ListItemComponent = (props: ListAsset) => {
  return (
    <div className="list-item">
      <div className="list-item-column">
        <div className="list-item-cell">
          <Text>{props.columnsData?.content}</Text>
        </div>
        <div className="list-item-cell">
          <Text>{props.columnsData?.type}</Text>
        </div>
        <div className="list-item-cell">
          <Text>{props.columnsData?.message}</Text>
        </div>
      </div>
    </div>
  );
};
