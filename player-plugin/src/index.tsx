import type { ReactPlayer, ReactPlayerPlugin } from "@player-ui/react";
import { AssetProviderPlugin } from "@player-ui/asset-provider-plugin-react";
import { ObjectInspector } from "@devtools-ui/object-inspector";
import Text from "@devtools-ui/text";

export class DevToolsAssetsPlugin implements ReactPlayerPlugin {
  name = "devtools-asssets-plugin";

  applyReact(reactPlayer: ReactPlayer) {
    new AssetProviderPlugin([
      ["Text", Text],
      ["objectInspector", ObjectInspector],
    ]).applyReact(reactPlayer);
  }
}
