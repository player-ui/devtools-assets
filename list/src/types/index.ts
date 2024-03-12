import { Asset } from "@player-ui/types";
import type { ListAsset } from "@devtools-ui/list-item";

export interface ListAssetType extends Asset<"list"> {
  data?: ListAsset[];
}
