import React from "react";

import {
  AssetPropsWithChildren,
  Asset,
  createSlot,
  ExpressionTemplateInstance,
} from "@player-tools/dsl";
import { ActionAsset } from "../types";
import { Text } from "@devtools-ui/text";
import { CollectionAsset } from "@player-ui/reference-assets-plugin";
import type { Asset as AssetType } from "@player-ui/player";

export const Collection = (props: AssetPropsWithChildren<CollectionAsset>) => {
  return <Asset type="collection" {...props} />;
};

const CollectionComp = (props: AssetPropsWithChildren<AssetType>) => {
  return (
    <Collection>
      <Collection.Values>{props.children}</Collection.Values>
    </Collection>
  );
};

Collection.Values = createSlot({
  name: "values",
  isArray: true,
  TextComp: Text,
  wrapInAsset: true,
});

/** A utility for quickly creating named slots using the text and collection factories */
const slotFactory = (name: string, isArray = false) =>
  createSlot({
    name,
    TextComp: Text,
    CollectionComp,
    isArray,
    wrapInAsset: true,
  });

export const LabelSlot = slotFactory("label");

Collection.Label = LabelSlot;

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
  wrapInAsset: true,
  name: "label",
  TextComp: Text,
  CollectionComp,
});
