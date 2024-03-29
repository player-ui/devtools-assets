# @devtools-ui/collection

## Overview

`@devtools-ui/collection` is a component package designed to be leveraged by a [Player-UI assets plugin](https://player-ui.github.io/next/plugins).

It provides a `Collection` component that can be used to group other Player assets into a stacked layout.

## Installation

To install `@devtools-ui/collection`, you can use pnpm or yarn:

```sh
pnpm i @devtools-ui/collection
```

or

```sh
yarn add @devtools-ui/collection
```

## Usage

You can leverage this asset through the `@devtools-ui/plugin`:

```ts
import { Collection } from "@devtools-ui/plugin";

// and use it to define your Player-UI content:
myFlow = {
  id: "my_flow",
  views: [
    <MyView>
      <Collection>
        <Collection.Values>
          <Asset type="text">
            <property name="value">Test 1</property>
          </Asset>
          <Asset type="text">
            <property name="value">Test 2</property>
          </Asset>
        </Collection.Values>
      </Collection>
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
import { CollectionAsset, CollectionComponent } from "@devtools-ui/collection";

export class AssetsRegistryPlugin
  implements ReactPlayerPlugin, ExtendedPlayerPlugin<[CollectionAsset]>
{
  name = "my-plugin";

  applyReact(reactPlayer: ReactPlayer) {
    reactPlayer.registerPlugin(
      new AssetProviderPlugin([["collection", CollectionComponent]])
    );
  }

  apply(player: Player) {
    player.registerPlugin(new TransformsPlugin());
  }
}
```

## Contributing

We welcome contributions to `@devtools-ui/collection`!
