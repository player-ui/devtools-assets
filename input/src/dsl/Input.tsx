import React from "react";
import { AssetPropsWithChildren, Asset } from "@player-tools/dsl";
import { LabelSlot } from "@devtools-ui/slots";
import { InputAsset } from "../types";

export const Input = (
  props: Omit<AssetPropsWithChildren<InputAsset>, "binding"> & {
    binding?: string;
  }
) => {
  const { children, binding, ...rest } = props;
  return (
    <Asset type="input" {...rest}>
      <property name="binding">{binding}</property>
      {children}
    </Asset>
  );
};

Input.Label = LabelSlot;
