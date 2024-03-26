import type { Meta } from "@storybook/react";
import { createDSLStory } from "@player-ui/storybook-addon-player";
import { Console } from "@devtools-ui/plugin";

const meta: Meta<typeof Console> = {
  title: "Devtools UI Assets/Console",
  component: Console,
};

export default meta;

export const Basic = createDSLStory(() => import("../flows/console/basic?raw"));
