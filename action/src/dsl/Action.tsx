import React from "react";

import {
  AssetPropsWithChildren,
  Asset,
  ExpressionTemplateInstance,
} from "@player-tools/dsl";
import { ActionAsset } from "../types";
import { LabelSlot } from "@devtools-ui/slots";

export const Action = (
  props: Omit<AssetPropsWithChildren<ActionAsset>, "exp"> & {
    /** An optional expression to execute before transitioning */
    exp?: ExpressionTemplateInstance;
  }
) => {
  const { exp, children, ...rest } = props;

  return (
    <Asset type="action" {...rest}>
      <property name="exp">{exp?.toValue()}</property>
      {children}
    </Asset>
  );
};
Action.Label = LabelSlot;
