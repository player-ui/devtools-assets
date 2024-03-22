import type { Meta } from "@storybook/react";
import { createDSLStory } from "@player-ui/storybook-addon-player";
import { Navigation } from "@devtools-ui/plugin";

const meta: Meta<typeof Navigation> = {
  title: "Devtools UI Assets/Navigation",
  component: Navigation,
};

export default meta;

export const Basic = createDSLStory(
  () => import("../flows/navigation/basic?raw")
);
