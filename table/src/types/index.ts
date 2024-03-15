import { Asset } from "@player-ui/types";

export interface TableType extends Asset<"table"> {
  data: { [key: string]: any }[];
  metaData?: {
    caption?: string;
    variant?: "simple" | "striped" | "unstyled";
    headers?: string[];
  };
}
