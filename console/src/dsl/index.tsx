import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  BindingTemplateInstance,
  ExpressionTemplateInstance,
} from "@player-tools/dsl";
import type { ConsoleAsset } from "../types";

/**
 * Defines the component DSL representation for the Console asset,
 * a component that emulates a REPL environment that you see in browsers.
 */
export const Console = (
  props: Omit<AssetPropsWithChildren<ConsoleAsset>, "binding"> & {
    /** Binding as template string */
    binding: BindingTemplateInstance;
    /** Expression as template string */
    exp: ExpressionTemplateInstance;
  }
) => {
  const { exp, binding } = props;

  return (
    <Asset type="console">
      {exp && <property name="exp">{exp.toValue()}</property>}
      {binding && <property name="binding">{binding.toValue()}</property>}
    </Asset>
  );
};
