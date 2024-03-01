import { Asset, AssetWrapper } from "@player-ui/types";
import type { IconButton } from "@chakra-ui/react";
export type JSONArray = JSONValue[];

export type JSONObject = { [key: string]: JSONValue };

export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONObject
  | JSONArray;

export type Variant = "solid" | "outline" | "ghost" | "link";

export interface ActionAsset<AnyAsset extends Asset = Asset>
  extends Asset<"action"> {
  /**text value for action */
  value?: string;
  /** Icon Button for Left of Action*/
  ButtonLeft?: typeof IconButton;
  /** Icon Button for Right of Action*/
  ButtonRight?: typeof IconButton;
  /** Variant of button */
  Variant?: Variant;

  /**indicate a spinner for loading */
  isLoading?: boolean;

  /** function */
  onClick?: () => void;

  /** automationId for testing */
  automationId?: string;
}
