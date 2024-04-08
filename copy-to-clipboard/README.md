# @devtools-ui/copy-to-clipboard

## Overview

`@devtools-ui/copy-to-clipboard` is a component package designed to be leveraged by a [Player-UI assets plugin](https://player-ui.github.io/next/plugins).

It provides a CopyToClipboard component that can be used to copy a data binding content to the clipboard.

## Installation

To install `@devtools-ui/copy-to-clipboard`, you can use pnpm or yarn:

```sh
pnpm i @devtools-ui/copy-to-clipboard
```

or

```sh
yarn add @devtools-ui/copy-to-clipboard
```

## Usage

You can leverage this asset through the `@devtools-ui/plugin`:

```ts
import { CopyToClipboard } from "@devtools-ui/plugin";

// and use it to define your Player-UI content:
myFlow = {
  id: "my_flow",
  views: [
    <CopyToClipboard binding={b`my_binding`}>
      <CopyToClipboard.Label>Copy to clipboard</CopyToClipboard.Label>
    </CopyToClipboard>,
  ],
};
```

For more information on how to author Player-UI content using DSL, please check our [Player-UI docs](https://player-ui.github.io/next/dsl#tsxjsx-content-authoring-player-dsl).

Or, your can leverage this asset in your own plugin:

```ts
// TransformPlugin.ts
import type { Player, PlayerPlugin } from "@player-ui/player";
import { AssetTransformPlugin } from "@player-ui/asset-transform-plugin";
import { copyToClipboardTransform } from "@devtools-ui/copy-to-clipboard";

export class TransformsPlugin implements PlayerPlugin {
  name = "my-plugin-transforms";

  apply(player: Player) {
    player.registerPlugin(
      new AssetTransformPlugin([
        [{ type: "copy-to-clipboard" }, copyToClipboardTransform],
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
import {
  CopyToClipboardAsset,
  CopyToClipboardComponent,
} from "@devtools-ui/copy-to-clipboard";

export class AssetsRegistryPlugin
  implements ReactPlayerPlugin, ExtendedPlayerPlugin<[CopyToClipboardAsset]>
{
  name = "my-plugin";

  applyReact(reactPlayer: ReactPlayer) {
    reactPlayer.registerPlugin(
      new AssetProviderPlugin([["copy-to-clipboard", CopyToClipboardComponent]])
    );
  }

  apply(player: Player) {
    player.registerPlugin(new TransformsPlugin());
  }
}
```

## Contributing

We welcome contributions to `@devtools-ui/copy-to-clipboard`!
