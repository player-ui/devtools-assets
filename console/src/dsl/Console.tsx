import React from "react";
import { AssetPropsWithChildren, Asset, createSlot } from "@player-tools/dsl";
import { ConsoleAsset } from "../types";
import { Text } from "@devtools-ui/text";

export const Console = (
  props: Omit<AssetPropsWithChildren<ConsoleAsset>, "binding"> & {
    binding?: string;
  }
) => {
  return (
    <Asset type="console" Asset/>
  );
};


