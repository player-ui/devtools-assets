import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  createSlot,
  isTemplateStringInstance,
} from "@player-tools/dsl";
import type { Asset as AssetType } from "@player-ui/player";
import type { ActionAsset } from "../types";
import { Collection } from "@devtools-ui/collection";
import { Text } from "@devtools-ui/text";

export const Action = (props: AssetPropsWithChildren<ActionAsset>) => {
  const { exp, children, ...rest } = props;

  let expValue: ActionAsset["exp"];

  if (isTemplateStringInstance(exp)) {
    expValue = exp.toValue();
  } else if (Array.isArray(exp)) {
    expValue = exp.map((e) => (typeof e === "string" ? e : e.toValue()));
  } else if (exp) {
    expValue = exp;
  }

  return (
    <Asset type="action" {...rest} {...(expValue && { exp: expValue })}>
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
