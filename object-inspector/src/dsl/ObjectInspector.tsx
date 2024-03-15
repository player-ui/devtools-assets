import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  createSlot,
  BindingTemplateInstance,
} from "@player-tools/dsl";
import type { Asset as AssetType } from "@player-ui/player";
import { Text } from "@devtools-ui/text";
import { Collection } from "@devtools-ui/collection";
import type { ObjectInspectorAsset } from "../types";

export const ObjectInspector = (
  props: Omit<AssetPropsWithChildren<ObjectInspectorAsset>, "binding"> & {
    /** The binding */
    binding: BindingTemplateInstance;
  }
) => {
  const { children, binding, ...rest } = props;

  return (
    <Asset type="object-inspector" {...rest}>
      <property name="binding">{binding.toValue()}</property>
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

ObjectInspector.Label = createSlot({
  name: "label",
  TextComp: Text,
  CollectionComp,
  isArray: false,
  wrapInAsset: true,
});
