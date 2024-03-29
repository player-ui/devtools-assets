import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  BindingTemplateInstance,
  isTemplateStringInstance,
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
  }
) => {
  const { exp, binding } = props;

  // Extracting the exp value from the props
  let expValue: ConsoleAsset["exp"];

  if (isTemplateStringInstance(exp)) {
    expValue = exp.toValue();
  } else if (Array.isArray(exp)) {
    expValue = exp.map((e) => (typeof e === "string" ? e : e.toValue()));
  } else if (exp) {
    expValue = exp;
  }

  return (
    <Asset type="console">
      {exp && <property name="exp">{expValue}</property>}
      {binding && <property name="binding">{binding.toValue()}</property>}
    </Asset>
  );
};
