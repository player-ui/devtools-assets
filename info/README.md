# @devtools-ui/info

## Overview

`@devtools-ui/info` is a component package designed to be leveraged by a [Player-UI assets plugin](https://player-ui.github.io/next/plugins).

It provides an Info view. A simple stacked layout composed by header, main content and footer.

## Installation

To install `@devtools-ui/info`, you can use pnpm or yarn:

```sh
pnpm i @devtools-ui/info
```

or

```sh
yarn add @devtools-ui/info
```

## Usage

You can leverage this asset through the `@devtools-ui/plugin`:

```ts
import { Info, Text } from "@devtools-ui/plugin";

// and use it to define your Player-UI content:
myFlow = {
  id: "my_flow",
  views: [
    <Info>
      <Info.Header>
        <Text>Header</Text>
      </Info.Header>
      <Info.Main>
        <Text>Main</Text>
      </Info.Main>
      <Info.Footer>
        <Text>Footer</Text>
      </Info.Footer>
    </Info>,
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
import { InfoAsset, InfoComponent } from "@devtools-ui/info";

export class AssetsRegistryPlugin
  implements ReactPlayerPlugin, ExtendedPlayerPlugin<[InfoAsset]>
{
  name = "my-plugin";

  applyReact(reactPlayer: ReactPlayer) {
    reactPlayer.registerPlugin(
      new AssetProviderPlugin([["info", InfoComponent]])
    );
  }

  apply(player: Player) {
    player.registerPlugin(new TransformsPlugin());
  }
}
```

## Contributing

We welcome contributions to `@devtools-ui/info`!
