import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  BindingTemplateInstance,
  isTemplateStringInstance,
} from "@player-tools/dsl";
import { ConsoleAsset } from "../types";

/**
 * Defines the component DSL representation for the Console asset,
 * a component that emulates a REPL environment that you see in browsers.
 */
export const Console = (
  props: Omit<AssetPropsWithChildren<ConsoleAsset>, "binding"> & {
    /** The binding */
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
  } else {
    expValue = exp;
  }

  return (
    <Asset type="console" {...(expValue && { exp: expValue })}>
      {exp && <property name="exp">{expValue}</property>}
      {binding && <property name="binding">{binding.toValue()}</property>}
    </Asset>
  );
};
