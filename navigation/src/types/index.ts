import { Asset } from "@player-ui/types";
import { ActionAsset } from "@devtools-ui/action";
/** list of actions that tell which view to go to */
export interface NavigationAsset extends Asset<"navigation"> {
  actions?: ActionAsset[];
}
