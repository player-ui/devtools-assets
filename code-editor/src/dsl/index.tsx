import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  BindingTemplateInstance,
  ExpressionTemplateInstance,
} from "@player-tools/dsl";
import type { CodeEditorAsset } from "../types";

/**
 * Defines the component DSL representation, so users of this plugin can author Player-UI
 * content leveraging .jsx/.tsx syntax.
 */
export const CodeEditor = (
  props: Omit<
    AssetPropsWithChildren<CodeEditorAsset>,
    "binding" | "expression"
  > & {
    /** The binding */
    binding: BindingTemplateInstance;
    /** Expression as template string */
    exp: ExpressionTemplateInstance;
  }
) => {
  const { exp, binding, ...rest } = props;

  return (
    <Asset type="code-editor" {...rest}>
      <property name="binding">{binding.toValue()}</property>
      <property name="exp">{exp.toValue()}</property>
    </Asset>
  );
};
