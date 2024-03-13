import React from "react";
import type { Player, PlayerPlugin } from "@player-ui/player";
import { ChakraProvider, useTheme } from "@chakra-ui/react";
import { AssetTransformPlugin } from "@player-ui/asset-transform-plugin";
import type {
  ExtendedPlayerPlugin,
  ReactPlayer,
  ReactPlayerPlugin,
} from "@player-ui/react";
import { AssetProviderPlugin } from "@player-ui/asset-provider-plugin-react";
import { actionTransform, ActionAsset, Action } from "@devtools-ui/action";
import { CollectionAsset, Collection } from "@devtools-ui/collection";
import { TextAsset, Text } from "@devtools-ui/text";

class DevtoolsUITransformsPlugin implements PlayerPlugin {
  name = "devtools-ui-transforms";

  apply(player: Player) {
    player.registerPlugin(
      new AssetTransformPlugin([[{ type: "action" }, actionTransform]])
    );
  }
}

const OptionalChakraThemeProvider = (
  props: React.PropsWithChildren<unknown>
) => {
  const theme = useTheme();

  if (theme) {
    return <>{props.children}</>;
  }

  return <ChakraProvider>{props.children}</ChakraProvider>;
};

export class DevtoolsUIPlugin
  implements
    ReactPlayerPlugin,
    ExtendedPlayerPlugin<[ActionAsset, CollectionAsset, TextAsset]>
{
  name = "devtools-ui";

  applyReact(reactPlayer: ReactPlayer) {
    reactPlayer.registerPlugin(
      new AssetProviderPlugin([
        ["text", Text],
        ["action", Action],
        ["collection", Collection],
      ])
    );

    reactPlayer.hooks.webComponent.tap(this.name, (Comp) => {
      // eslint-disable-next-line react/display-name
      return () => {
        return (
          <OptionalChakraThemeProvider>
            <Comp />
          </OptionalChakraThemeProvider>
        );
      };
    });
  }

  apply(player: Player) {
    player.registerPlugin(new DevtoolsUITransformsPlugin());
  }
}
