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
import type { CopyToClipboardAsset } from "../types";

/**
 * Defines the component DSL representation, so users of this plugin can author Player-UI
 * content leveraging .jsx/.tsx syntax.
 */
export const CopyToClipboard = (
  props: Omit<AssetPropsWithChildren<CopyToClipboardAsset>, "binding"> & {
    /** The binding */
    binding?: BindingTemplateInstance;
  }
) => {
  const { binding, children, ...rest } = props;

  return (
    <Asset type="copy-to-clipboard" {...rest}>
      {binding && <property name="binding">{binding.toValue()}</property>}
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

CopyToClipboard.Label = createSlot({
  name: "label",
  TextComp: Text,
  CollectionComp,
  isArray: false,
  wrapInAsset: true,
});
