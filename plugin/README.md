# @devtools-ui/plugin

## Overview

`@devtools-ui/plugin` is a [Player-UI](https://player-ui.github.io/next/plugins) assets plugin.

It register the following assets to your React Player instance:

- action
- collection
- input
- list
- navigation
- object-inspector
- text
- stacked-view
- table
- console
- copy-to-clipboard
- code-editor
- radio-group
- toggle

## Installation

To install `@devtools-ui/plugin`, you can use pnpm or yarn:

```sh
pnpm i @devtools-ui/plugin
```

or

```sh
yarn add @devtools-ui/plugin
```

## Usage

You can leverage this plugin through the `@devtools-ui/plugin`:

```ts
import { ReactPlayer } from "@player-ui/react";
import DevtoolsUIPlugin from "@devtools-ui/plugin";

const reactPlayer = new ReactPlayer({
  plugins: [new DevtoolsUIPlugin()],
});
```

## Contributing

We welcome contributions to `@devtools-ui/plugin`!
