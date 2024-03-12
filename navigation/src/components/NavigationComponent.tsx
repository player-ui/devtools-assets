import React from "react";
import { NavigationAsset } from "../types";
import { ActionComponent } from "@devtools-ui/action";

export const NavigationComponent = (props: NavigationAsset) => {
  const { id, actions, ...rest } = props;
  return (
    <div id={id} {...rest}>
      {actions?.map((action, index) => (
        <ActionComponent key={index} {...action} />
      ))}
    </div>
  );
};
