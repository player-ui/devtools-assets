import React from "react";
import { AssetPropsWithChildren, Asset } from "@player-tools/dsl";
import { LabelSlot } from "@devtools-ui/slots";
import { InputAsset } from "../types";

export const Input = (
  props: Omit<AssetPropsWithChildren<InputAsset>, "value"> & {
    value?: string;
  }
) => {
  const { children, ...rest } = props;
  return (
    <Asset type="input" {...rest}>
      {children}
    </Asset>
  );
};

Input.Label = LabelSlot;
