import React from "react";
import type { Player } from "@player-ui/player";
import { ChakraProvider, useTheme } from "@chakra-ui/react";
import type {
  ExtendedPlayerPlugin,
  ReactPlayer,
  ReactPlayerPlugin,
} from "@player-ui/react";
import { AssetProviderPlugin } from "@player-ui/asset-provider-plugin-react";
import { ActionAsset, ActionComponent } from "@devtools-ui/action";
import { CollectionAsset, CollectionComponent } from "@devtools-ui/collection";
import { InputAsset, InputComponent } from "@devtools-ui/input";
import { ListAsset, ListComponent } from "@devtools-ui/list";
import { NavigationAsset, NavigationComponent } from "@devtools-ui/navigation";
import { ConsoleAsset, ConsoleComponent } from "@devtools-ui/console";
import { TableAsset, TableComponent } from "@devtools-ui/table";
import {
  CopyToClipboardAsset,
  CopyToClipboardComponent,
} from "@devtools-ui/copy-to-clipboard";
import {
  StackedViewView,
  StackedViewComponent,
} from "@devtools-ui/stacked-view";
import {
  ObjectInspectorAsset,
  ObjectInspectorComponent,
} from "@devtools-ui/object-inspector";
import { TextAsset, TextComponent } from "@devtools-ui/text";
import { ToggleAsset, ToggleComponent } from "@devtools-ui/toggle";
import { CodeEditorAsset, CodeEditorComponent } from "@devtools-ui/code-editor";
import { RadioGroupAsset, RadioGroupComponent } from "@devtools-ui/radio-group";
import { TransformsPlugin } from "./TransformPlugin";

const OptionalChakraThemeProvider = (
  props: React.PropsWithChildren<unknown>
) => {
  const theme = useTheme();

  if (theme) {
    return <>{props.children}</>;
  }

  return <ChakraProvider>{props.children}</ChakraProvider>;
};

export class AssetsRegistryPlugin
  implements
    ReactPlayerPlugin,
    ExtendedPlayerPlugin<
      [
        ActionAsset,
        ConsoleAsset,
        CollectionAsset,
        InputAsset,
        ListAsset,
        NavigationAsset,
        ObjectInspectorAsset,
        TextAsset,
        StackedViewView,
        TableAsset,
        CopyToClipboardAsset,
        CodeEditorAsset,
        ToggleAsset,
        RadioGroupAsset,
      ]
    >
{
  name = "devtools-ui";

  applyReact(reactPlayer: ReactPlayer) {
    reactPlayer.registerPlugin(
      new AssetProviderPlugin([
        ["action", ActionComponent],
        ["collection", CollectionComponent],
        ["input", InputComponent],
        ["list", ListComponent],
        ["navigation", NavigationComponent],
        ["object-inspector", ObjectInspectorComponent],
        ["text", TextComponent],
        ["console", ConsoleComponent],
        ["stacked-view", StackedViewComponent],
        ["table", TableComponent],
        ["copy-to-clipboard", CopyToClipboardComponent],
        ["code-editor", CodeEditorComponent],
        ["toggle", ToggleComponent],
        ["radio-group", RadioGroupComponent],
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
    player.registerPlugin(new TransformsPlugin());
  }
}
