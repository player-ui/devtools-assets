import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  BindingTemplateInstance,
} from "@player-tools/dsl";
import type { TableAsset } from "../types";

/**
 * Defines the component DSL representation, so users of this plugin can author Player-UI
 * content leveraging .jsx/.tsx syntax.
 */
export const Table = (
  props: Omit<AssetPropsWithChildren<TableAsset>, "binding"> & {
    /** The binding */
    binding?: BindingTemplateInstance;
  }
) => {
  const { binding, children, ...rest } = props;

  return (
    <Asset type="table" {...rest}>
      {binding && <property name="binding">{binding.toValue()}</property>}
      {children}
    </Asset>
  );
};
