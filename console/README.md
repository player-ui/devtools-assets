# @devtools-ui/console

## Overview

`@devtools-ui/console` is a component package designed to be leveraged by a [Player-UI assets plugin](https://player-ui.github.io/next/plugins).

It provides a [Console]([TODO: add link to storybook]) component that can be used to [TODO: define component features].

This package is part of a mono-repo built with Bazel, ensuring fast and reliable builds.

## Installation

To install `@devtools-ui/console`, you can use pnpm or yarn:

```sh
pnpm i @devtools-ui/console
```

or

```sh
yarn add @devtools-ui/console
```

## Usage

You can leverage this asset through the `@devtools-ui/plugin`:

```ts
import { Console } from "@devtools-ui/plugin";

// and use it to define your Player-UI content:
myFlow = {
  id: "my_flow",
  views: [<Console exp={e`my_expression`} binding={b`my_binding`} />],
};
```

For more information on how to author Player-UI content using DSL, please check our [Player-UI docs](https://player-ui.github.io/next/dsl#tsxjsx-content-authoring-player-dsl).

Or, your can leverage this asset in your own plugin:

```ts
// TransformPlugin.ts
import type { Player, PlayerPlugin } from "@player-ui/player";
import { AssetTransformPlugin } from "@player-ui/asset-transform-plugin";
import { consoleTransform } from "@devtools-ui/console";

export class TransformsPlugin implements PlayerPlugin {
  name = "my-plugin-transforms";

  apply(player: Player) {
    player.registerPlugin(
      new AssetTransformPlugin([[{ type: "console" }, consoleTransform]])
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
import { ConsoleAsset, ConsoleComponent } from "@devtools-ui/console";

export class AssetsRegistryPlugin
  implements ReactPlayerPlugin, ExtendedPlayerPlugin<[ConsoleAsset]>
{
  name = "my-plugin";

  applyReact(reactPlayer: ReactPlayer) {
    reactPlayer.registerPlugin(
      new AssetProviderPlugin([["console", ConsoleComponent]])
    );
  }

  apply(player: Player) {
    player.registerPlugin(new TransformsPlugin());
  }
}
```

## Contributing

We welcome contributions to `@devtools-ui/console`! Please see the [CONTRIBUTING.md](TODO: link to the file) file for more information on how to contribute.
