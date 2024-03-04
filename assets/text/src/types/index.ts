import { Asset } from "@player-ui/types";

export type TextSize = "xs" | "sm" | "md" | "lg" | "xl";

export type TextElement =
  | "b"
  | "i"
  | "u"
  | "abbr"
  | "cite"
  | "del"
  | "em"
  | "ins"
  | "kbd"
  | "mark"
  | "s"
  | "samp"
  | "sub"
  | "sup";

export interface TextAsset extends Asset<"text"> {
  value: string;
  size?: TextSize;
  as?: TextElement;
}
