import type { Meta } from "@storybook/react";
import { createDSLStory } from "@player-ui/storybook-addon-player";
import { List } from "@devtools-ui/plugin";

const meta: Meta<typeof List> = {
  title: "Devtools UI Assets/List",
  component: List,
};

export default meta;

export const Basic = createDSLStory(() => import("../flows/list/basic?raw"));
