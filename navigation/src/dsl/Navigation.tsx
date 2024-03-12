import React from "react";
import { AssetPropsWithChildren, Asset } from "@player-tools/dsl";
import { NavigationAsset } from "../types";

import { LabelSlot, ActionsSlot } from "@devtools-ui/slots";


export const Navigation = (
  props: Omit<AssetPropsWithChildren<NavigationAsset>, "value"> & {
    value?: string;
  }
) => <Asset type="navigation" {...props}></Asset>;


  Navigation.Label = LabelSlot
  Navigation.Actions = ActionsSlot