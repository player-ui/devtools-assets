# @devtools-ui/object-inspector

## Overview

`@devtools-ui/object-inspector` is a component package designed to be leveraged by a [Player-UI assets plugin](https://player-ui.github.io/next/plugins).

It provides an `ObjectInspector` component to display objects for debugging purposes.

## Installation

To install `@devtools-ui/object-inspector`, you can use pnpm or yarn:

```sh
pnpm i @devtools-ui/object-inspector
```

or

```sh
yarn add @devtools-ui/object-inspector
```

## Usage

You can leverage this asset through the `@devtools-ui/plugin`:

```ts
import { ObjectInspector } from "@devtools-ui/plugin";

// and use it to define your Player-UI content:
myFlow = {
  id: "my_flow",
  views: [
    <MyView>
      <ObjectInspector binding={b`foo`}>
        <ObjectInspector.Label>Label</ObjectInspector.Label>
      </ObjectInspector>
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
import { objectInspectorTransform } from "@devtools-ui/object-inspector";

export class TransformsPlugin implements PlayerPlugin {
  name = "my-plugin-transforms";

  apply(player: Player) {
    player.registerPlugin(
      new AssetTransformPlugin([
        [{ type: "object-inspector" }, objectInspectorTransform],
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
  ObjectInspectorAsset,
  ObjectInspectorComponent,
} from "@devtools-ui/object-inspector";

export class AssetsRegistryPlugin
  implements ReactPlayerPlugin, ExtendedPlayerPlugin<[ObjectInspectorAsset]>
{
  name = "my-plugin";

  applyReact(reactPlayer: ReactPlayer) {
    reactPlayer.registerPlugin(
      new AssetProviderPlugin([["object-inspector", ObjectInspectorComponent]])
    );
  }

  apply(player: Player) {
    player.registerPlugin(new TransformsPlugin());
  }
}
```

## Contributing

We welcome contributions to `@devtools-ui/object-inspector`!
