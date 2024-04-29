import type { Player, PlayerPlugin } from "@player-ui/player";
import { AssetTransformPlugin } from "@player-ui/asset-transform-plugin";
import { actionTransform } from "@devtools-ui/action";
import { inputTransform } from "@devtools-ui/input";
import { objectInspectorTransform } from "@devtools-ui/object-inspector";
import { consoleTransform } from "@devtools-ui/console";
import { tableTransform } from "@devtools-ui/table";
import { copyToClipboardTransform } from "@devtools-ui/copy-to-clipboard";
import { toggleTransform } from "@devtools-ui/toggle";

export class TransformsPlugin implements PlayerPlugin {
  name = "devtools-ui-transforms";

  apply(player: Player) {
    player.registerPlugin(
      new AssetTransformPlugin([
        [{ type: "action" }, actionTransform],
        [{ type: "input" }, inputTransform],
        [{ type: "object-inspector" }, objectInspectorTransform],
        [{ type: "console" }, consoleTransform],
        [{ type: "table" }, tableTransform],
        [{ type: "copy-to-clipboard" }, copyToClipboardTransform],
        [{ type: "toggle" }, toggleTransform],
      ])
    );
  }
}
