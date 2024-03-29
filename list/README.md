# @devtools-ui/list

## Overview

`@devtools-ui/list` is a component package designed to be leveraged by a [Player-UI assets plugin](https://player-ui.github.io/next/plugins).

It provides a `List` component that can be used group assets into an ordered or unordered list.

## Installation

To install `@devtools-ui/list`, you can use pnpm or yarn:

```sh
pnpm i @devtools-ui/list
```

or

```sh
yarn add @devtools-ui/list
```

## Usage

You can leverage this asset through the `@devtools-ui/plugin`:

```ts
import { List } from "@devtools-ui/plugin";

// and use it to define your Player-UI content:
myFlow = {
  id: "my_flow",
  views: [
    <MyView>
      <List metaData={{ ordered: true }}>
        <List.Values>
          <Asset type="text">
            <property name="value">Test 1</property>
          </Asset>
          <Asset type="text">
            <property name="value">Test 2</property>
          </Asset>
        </List.Values>
      </List>
    </MyView>,
  ],
};
```

For more information on how to author Player-UI content using DSL, please check our [Player-UI docs](https://player-ui.github.io/next/dsl#tsxjsx-content-authoring-player-dsl).

Or, your can leverage this asset in your own plugin:

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
import { ListAsset, ListComponent } from "@devtools-ui/list";

export class AssetsRegistryPlugin
  implements ReactPlayerPlugin, ExtendedPlayerPlugin<[ListAsset]>
{
  name = "my-plugin";

  applyReact(reactPlayer: ReactPlayer) {
    reactPlayer.registerPlugin(
      new AssetProviderPlugin([["list", ListComponent]])
    );
  }

  apply(player: Player) {
    player.registerPlugin(new TransformsPlugin());
  }
}
```

## Contributing

We welcome contributions to `@devtools-ui/list`!
