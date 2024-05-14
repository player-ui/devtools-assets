import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  BindingTemplateInstance,
} from "@player-tools/dsl";
import type { FlameGraphAsset } from "../types";

/**
 * Defines the component DSL representation, so users of this plugin can author Player-UI
 * content leveraging .jsx/.tsx syntax.
 */
export const FlameGraph = (
  props: Omit<AssetPropsWithChildren<FlameGraphAsset>, "binding"> & {
    /** The binding as a tagged template instance */
    binding: BindingTemplateInstance;
  }
) => {
  const { children, binding, ...rest } = props;

  return (
    <Asset type="flame-graph" {...rest}>
      <property name="binding">{binding.toValue()}</property>
      {children}
    </Asset>
  );
};
