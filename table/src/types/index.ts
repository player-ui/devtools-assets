import type { Asset } from "@player-ui/types";

export interface TableAsset extends Asset<"table"> {
  /** Binding */
  binding?: string;
}

/** A stateful instance of the asset */
export interface TransformedTable extends TableAsset {
  /** The result of the transformation (transform/index.ts) */
  rows: Array<Record<string, string>>;
}
