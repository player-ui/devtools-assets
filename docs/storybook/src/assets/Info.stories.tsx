import type { Meta } from "@storybook/react";
import { createDSLStory } from "@player-ui/storybook-addon-player";
import { Info } from "@devtools-ui/plugin";

const meta: Meta<typeof Info> = {
  title: "Devtools UI Assets/Info",
  component: Info,
};

export default meta;

export const Basic = createDSLStory(() => import("../flows/info/basic?raw"));
