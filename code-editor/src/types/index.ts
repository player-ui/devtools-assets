import type { Asset } from "@player-ui/types";

export interface CodeEditorAsset extends Asset<"code-editor"> {
  /** binding pointing to the JSON object to edit */
  binding?: string;
  /** An expression to execute on the code change */
  exp?: string;
}

/** A stateful instance of the asset */
export interface TransformedCodeEditor extends CodeEditorAsset {
  /** The JSON object to edit as string */
  code: string;
  /** Transformed expression to execute on the code change */
  run: (code: string | undefined) => void;
}
