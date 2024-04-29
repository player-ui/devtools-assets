import type { Meta } from "@storybook/react";
import { createDSLStory } from "@player-ui/storybook-addon-player";
import { Toggle } from "@devtools-ui/plugin";

const meta: Meta<typeof Toggle> = {
  title: "Devtools UI Assets/Toggle",
  component: Toggle,
};

export default meta;

export const Basic = createDSLStory(() => import("../flows/toggle/basic?raw"));


