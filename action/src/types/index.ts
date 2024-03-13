import type { TextAsset } from "@devtools-ui/text";
import type { Asset, AssetWrapper, Expression } from "@player-ui/types";

export type Variant = "solid" | "outline" | "ghost" | "link";

export interface ActionAsset extends Asset<"action"> {
  /**text value for action */
  value?: string;

  /** An optional Icon asset. */
  icon?: AssetWrapper;

  /** A text asset for the action's label */
  label?: AssetWrapper<TextAsset>;

  /** An optional expression to execute before transitioning */
  exp?: Expression;

  /** Additional optional data to assist with the action interactions on the page */
  metaData?: {
    /** Force transition to the next view without checking for validation */
    skipValidation?: boolean;

    /** Button variant */
    variant?: Variant;

    /**indicate a spinner for loading */
    isLoading?: boolean;

    /** icon position */
    iconPosition?: "left" | "right";
  };
}

/** A stateful instance of an action */
export interface TransformedAction extends ActionAsset {
  /** A method to execute the action */
  run: () => void;
}
