# @devtools-ui/flame-graph

## Overview

`@devtools-ui/flame-graph` is a component package designed to be leveraged by a [Player-UI assets plugin](https://player-ui.github.io/next/plugins).

It provides a `flame-graph` component for visualizing profiling data.

## Installation

To install `@devtools-ui/flame-graph`, you can use pnpm or yarn:

```sh
pnpm i @devtools-ui/flame-graph
```

or

```sh
yarn add @devtools-ui/flame-graph
```

## Usage

You can leverage this asset through the `@devtools-ui/plugin`:

```ts
import { FlameGraph } from "@devtools-ui/plugin";

// and use it to define your Player-UI content:
myFlow = {
  id: "my_flow",
  views: [<FlameGraph binding={b`my_binding`} height={100} width={200} />],
};
```

For more information on how to author Player-UI content using DSL, please check our [Player-UI docs](https://player-ui.github.io/next/dsl#tsxjsx-content-authoring-player-dsl).

Or, your can leverage this asset in your own plugin:

```ts
// TransformPlugin.ts
import type { Player, PlayerPlugin } from "@player-ui/player";
import { AssetTransformPlugin } from "@player-ui/asset-transform-plugin";
import { flameGraphTransform } from "@devtools-ui/flame-graph";

export class TransformsPlugin implements PlayerPlugin {
  name = "my-plugin-transforms";

  apply(player: Player) {
    player.registerPlugin(
      new AssetTransformPlugin([[{ type: "flame-graph" }, flameGraphTransform]])
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
import { FlameGraphAsset, FlameGraphComponent } from "@devtools-ui/flame-graph";

export class AssetsRegistryPlugin
  implements ReactPlayerPlugin, ExtendedPlayerPlugin<[FlameGraphAsset]>
{
  name = "my-plugin";

  applyReact(reactPlayer: ReactPlayer) {
    reactPlayer.registerPlugin(
      new AssetProviderPlugin([["flame-graph", FlameGraphComponent]])
    );
  }

  apply(player: Player) {
    player.registerPlugin(new TransformsPlugin());
  }
}
```
