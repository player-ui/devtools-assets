import type { Meta } from "@storybook/react";
import { createDSLStory } from "@player-ui/storybook-addon-player";

const meta: Meta = {
  title: "Devtools UI Assets/Devtools",
};

export default meta;

export const Basic = createDSLStory(
  () => import("../flows/devtools/basic?raw")
);
