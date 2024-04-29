import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  createSlot,
  BindingTemplateInstance,
} from "@player-tools/dsl";
import type { Asset as AssetType } from "@player-ui/player";
import { Collection } from "@devtools-ui/collection";
import { Text } from "@devtools-ui/text";
import type { ToggleAsset } from "../types";

/**
* Defines the component DSL representation, so users of this plugin can author Player-UI
* content leveraging .jsx/.tsx syntax.
*/
export const Toggle = (
  props: Omit<AssetPropsWithChildren<ToggleAsset>, "binding"> & {
    /** The binding as a tagged template instance */
    binding: BindingTemplateInstance;
  }
) => {
  const { children, binding, ...rest } = props;

  return (
    <Asset type="toggle" {...rest}>
      <property name="binding">{binding.toValue()}</property>
      {props.children}
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

Toggle.Label = createSlot({
  name: "label",
  TextComp: Text,
  CollectionComp,
  isArray: false,
  wrapInAsset: true,
});

Toggle.Value = createSlot({
  name: "value",
  TextComp: Text,
  CollectionComp,
  isArray: false,
  wrapInAsset: true,
});

Toggle.Values = createSlot({
  name: "values",
  TextComp: Text,
  CollectionComp,
  isArray: true,
  wrapInAsset: true,
});

