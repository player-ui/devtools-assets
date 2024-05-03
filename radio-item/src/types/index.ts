import type { Asset } from "@player-ui/types";

export interface RadioItemAsset extends Asset<"radio-item"> {
  /** Value */
  value: string;
  /** Label */
  label: string;
}
