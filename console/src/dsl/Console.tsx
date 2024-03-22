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
    "expressionBinding" | "historyBinding"
  > & {
    /** The expresion binding */
    expressionBinding: BindingTemplateInstance;

    /** The history binding */
    historyBinding: BindingTemplateInstance;
  }
) => {
  return (
    <Asset type="console">
      {props.children}
      <property name="expression">{props.expressionBinding.toValue()}</property>
      <property name="historyBinding">
        {props.historyBinding.toValue()}
      </property>
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
