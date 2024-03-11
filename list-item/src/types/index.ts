import { Asset } from "@player-ui/types";

interface ListItemData {
  content?: string;
  type?: string;
  message?: string;
}

export interface ListAsset extends Asset<"list-item"> {
  columnsData: ListItemData[];
}


/**columnsData = [
 * { content: 'Log Message', type: log, message: "" },
 * { content: 'Debug Data', type: debug, message: ""},
 * { content: "Event Triggered", type: Event, message: ""}
*/
