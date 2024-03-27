import React from "react";
import {
  AssetPropsWithChildren,
  Asset,
  BindingTemplateInstance,
  isTemplateStringInstance,
} from "@player-tools/dsl";
import { ConsoleAsset } from "../types";

export const Console = (
  props: Omit<AssetPropsWithChildren<ConsoleAsset>, "binding"> & {
    /** The binding */
    binding: BindingTemplateInstance;
  }
) => {
  const { expression, binding } = props;

  // Extracting the exp value from the props
  let expValue: ConsoleAsset["expression"];

  if (isTemplateStringInstance(expression)) {
    expValue = expression.toValue();
  } else if (Array.isArray(expression)) {
    expValue = expression.map((e) => (typeof e === "string" ? e : e.toValue()));
  } else {
    expValue = expression;
  }

  return (
    <Asset type="console" {...(expValue && { expression: expValue })}>
      {binding && <property name="binding">{binding.toValue()}</property>}
    </Asset>
  );
};
