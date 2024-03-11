import { Asset } from "@player-ui/types";
import { ListItemData } from "@devtools-ui/list-item";

export interface ListAsset extends Asset<"text"> {
  items: ListItemData[];
}
