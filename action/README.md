# @devtools-ui/action

## Overview

`@devtools-ui/action` is a component package designed to be leveraged by a [Player-UI assets plugin](https://player-ui.github.io/next/plugins).

It provides a `Action` component that can be used to allow a user interaction (e.g., [transition](https://player-ui.github.io/next/content/navigation)), usually rendered as a `<button>`.

## Installation

To install `@devtools-ui/action`, you can use pnpm or yarn:

```sh
pnpm i @devtools-ui/action
```

or

```sh
yarn add @devtools-ui/action
```

## Usage

You can leverage this asset through the `@devtools-ui/plugin`:

```ts
import { Action } from "@devtools-ui/plugin";

// and use it to define your Player-UI content:
myFlow = {
  id: "my_flow",
  views: [
    <MyView>
      <MyView.Actions>
        <Action exp={e`noop`}>
          <Action.Label>Label</Action.Label>
          <Action.Icon>
            <Asset type="icon">
              <property name="value">SomeIcon</property>
            </Asset>
          </Action.Icon>
        </Action>
      </MyView.Actions>
    </MyView>,
  ],
};
```

For more information on how to author Player-UI content using DSL, please check our [Player-UI docs](https://player-ui.github.io/next/dsl#tsxjsx-content-authoring-player-dsl).

Or, your can leverage this asset in your own plugin:

```ts
// TransformPlugin.ts
import type { Player, PlayerPlugin } from "@player-ui/player";
import { AssetTransformPlugin } from "@player-ui/asset-transform-plugin";
import { actionTransform } from "@devtools-ui/action";

export class TransformsPlugin implements PlayerPlugin {
  name = "my-plugin-transforms";

  apply(player: Player) {
    player.registerPlugin(
      new AssetTransformPlugin([[{ type: "action" }, actionTransform]])
    );
  }
}
```

```ts
// AssetRegistryPlugin.ts
import React from "react";
import type { Player } from "@player-ui/player";
import type {
  ExtendedPlayerPlugin,
  ReactPlayer,
  ReactPlayerPlugin,
} from "@player-ui/react";
import { AssetProviderPlugin } from "@player-ui/asset-provider-plugin-react";
import { TransformsPlugin } from "./TransformPlugin";
import { ActionAsset, ActionComponent } from "@devtools-ui/action";

export class AssetsRegistryPlugin
  implements ReactPlayerPlugin, ExtendedPlayerPlugin<[ActionAsset]>
{
  name = "my-plugin";

  applyReact(reactPlayer: ReactPlayer) {
    reactPlayer.registerPlugin(
      new AssetProviderPlugin([["action", ActionComponent]])
    );
  }

  apply(player: Player) {
    player.registerPlugin(new TransformsPlugin());
  }
}
```

## Contributing

We welcome contributions to `@devtools-ui/action`!
