# @devtools-ui/toggle

## Overview

`@devtools-ui/toggle` is a component package designed to be leveraged by a [Player-UI assets plugin](https://player-ui.github.io/next/plugins).

It provides a `Toggle` component that can be used to enter a boolean represented value.

This package is part of a mono-repo built with Bazel, ensuring fast and reliable builds.

## Installation

To install `@devtools-ui/toggle`, you can use pnpm or yarn:

```sh
pnpm i @devtools-ui/toggle
```

or

```sh
yarn add @devtools-ui/toggle
```

## Usage

You can leverage this asset through the `@devtools-ui/plugin`:

```ts
import { Toggle } from "@devtools-ui/plugin";

// and use it to define your Player-UI content:
myFlow = {
    id: 'my_flow',
    views: [
        <>
          <Toggle>
            <Toggle.Label>
              Toggle Test
            </Toggle.Label>
          </Toggle>
        </>
    ]
}
```

For more information on how to author Player-UI content using DSL, please check our [Player-UI docs](https://player-ui.github.io/next/dsl#tsxjsx-content-authoring-player-dsl).

Or, your can leverage this asset in your own plugin:

```ts
// TransformPlugin.ts
import type { Player, PlayerPlugin } from "@player-ui/player";
import { AssetTransformPlugin } from "@player-ui/asset-transform-plugin";
import { toggleTransform } from "@devtools-ui/toggle";

export class TransformsPlugin implements PlayerPlugin {
  name = "my-plugin-transforms";

  apply(player: Player) {
    player.registerPlugin(
      new AssetTransformPlugin([
        [{ type: "toggle" }, toggleTransform],
      ])
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
import { ToggleAsset, ToggleComponent } from "@devtools-ui/toggle";

export class AssetsRegistryPlugin implements ReactPlayerPlugin, ExtendedPlayerPlugin<[ToggleAsset]> {
  name = "my-plugin";

  applyReact(reactPlayer: ReactPlayer) {
    reactPlayer.registerPlugin(
      new AssetProviderPlugin([
        ["toggle", ToggleComponent],
      ])
    );
  }

  apply(player: Player) {
    player.registerPlugin(new TransformsPlugin());
  }
}
```

## Contributing

We welcome contributions to `@devtools-ui/toggle`! Please see the [CONTRIBUTING.md](TODO: link to the file) file for more information on how to contribute.
