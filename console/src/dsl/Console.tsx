import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  createSlot,
  BindingTemplateInstance,
} from "@player-tools/dsl";
import { Collection } from "@devtools-ui/collection";
import { Text } from "@devtools-ui/text";
import type { Asset as AssetType } from "@player-ui/player";
import { ConsoleAsset } from "../types";

export const Console = (
  props: Omit<
    AssetPropsWithChildren<ConsoleAsset>,
    "expression" | "history"
  > & {
    /** The expresion binding */
    expression: BindingTemplateInstance;

    /** The history binding */
    history: BindingTemplateInstance;
  }
) => {
  return (
    <Asset type="console">
      {props.children}
      <property name="expression">{props.expression.toValue()}</property>
      <property name="history">{props.history.toValue()}</property>
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

Console.Values = createSlot({
  name: "evaluations",
  TextComp: Text,
  CollectionComp,
  isArray: true,
  wrapInAsset: false,
});
