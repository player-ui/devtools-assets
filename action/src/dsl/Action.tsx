import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  ExpressionTemplateInstance,
  createSlot,
} from "@player-tools/dsl";
import type { Asset as AssetType } from "@player-ui/player";
import type { ActionAsset } from "../types";
import { Collection } from "@devtools-ui/collection";
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

const CollectionComp = (props: AssetPropsWithChildren<AssetType>) => {
  return (
    <Collection>
      <Collection.Values>{props.children}</Collection.Values>
    </Collection>
  );
};

Action.Label = createSlot({
  name: "label",
  TextComp: Text,
  CollectionComp,
  isArray: false,
  wrapInAsset: true,
});

Action.Icon = createSlot({
  name: "icon",
  TextComp: Text,
  CollectionComp,
  isArray: false,
  wrapInAsset: true,
});
