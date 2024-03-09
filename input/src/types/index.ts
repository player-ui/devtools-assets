import { Asset } from "@player-ui/types";

export type InputSize = "x-small" | "small" | "medium" | "large" | "full-width";

export interface InputAsset extends Asset<"input"> {
  value: string | undefined;
  size?: InputSize;
  placeholder?: string;
  maxLength?: number;
}
