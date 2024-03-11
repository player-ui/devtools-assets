import React from "react";
import { Text } from "@devtools-ui/text";
import { ListAsset } from "../types";

export const ListItemComponent = (props: ListAsset) => {
  return (
    <div className="list-item">
      {props.columnsData.map((data, index) => (
        <div key={index} className="list-item-column">
          <div className="list-item-cell">
            <Text>{data.content}</Text>
          </div>
          <div className="list-item-cell">
            <Text>{data.type}</Text>
          </div>
          <div className="list-item-cell">
            <Text>{data.message}</Text>
          </div>
        </div>
      ))}
    </div>
  );
};
