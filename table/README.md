# @devtools-ui/table

## Overview

`@devtools-ui/table` is a component package designed to be leveraged by a [Player-UI assets plugin](https://player-ui.github.io/next/plugins).

It provides a Table component. It extracts the column headers and rows from the provided binding and renders them in a table.

This package is part of a mono-repo built with Bazel, ensuring fast and reliable builds.

## Installation

To install `@devtools-ui/table`, you can use pnpm or yarn:

```sh
pnpm i @devtools-ui/table
```

or

```sh
yarn add @devtools-ui/table
```

## Usage

You can leverage this asset through the `@devtools-ui/plugin`:

```ts
import { Table } from "@devtools-ui/plugin";

// and use it to define your Player-UI content:
myFlow = {
  id: "my_flow",
  views: [<Table binding={b`my_binding`} />],
};
```

For more information on how to author Player-UI content using DSL, please check our [Player-UI docs](https://player-ui.github.io/next/dsl#tsxjsx-content-authoring-player-dsl).

Or, your can leverage this asset in your own plugin:

```ts
// TransformPlugin.ts
import type { Player, PlayerPlugin } from "@player-ui/player";
import { AssetTransformPlugin } from "@player-ui/asset-transform-plugin";
import { tableTransform } from "@devtools-ui/table";

export class TransformsPlugin implements PlayerPlugin {
  name = "my-plugin-transforms";

  apply(player: Player) {
    player.registerPlugin(
      new AssetTransformPlugin([[{ type: "table" }, tableTransform]])
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
import { TableAsset, TableComponent } from "@devtools-ui/table";

export class AssetsRegistryPlugin
  implements ReactPlayerPlugin, ExtendedPlayerPlugin<[TableAsset]>
{
  name = "my-plugin";

  applyReact(reactPlayer: ReactPlayer) {
    reactPlayer.registerPlugin(
      new AssetProviderPlugin([["table", TableComponent]])
    );
  }

  apply(player: Player) {
    player.registerPlugin(new TransformsPlugin());
  }
}
```

## Contributing

We welcome contributions to `@devtools-ui/table`!
