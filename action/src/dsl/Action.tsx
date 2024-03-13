import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  ExpressionTemplateInstance,
  createSlot,
} from "@player-tools/dsl";
import type { ActionAsset } from "../types";
import { Text } from "@devtools-ui/text";

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

Action.Label = createSlot({
  name: "label",
  TextComp: Text,
  isArray: false,
  wrapInAsset: true,
});

Action.Icon = createSlot({
  name: "icon",
  TextComp: Text,
  isArray: false,
  wrapInAsset: true,
});
