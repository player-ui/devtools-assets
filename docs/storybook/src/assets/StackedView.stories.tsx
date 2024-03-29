import type { Meta } from "@storybook/react";
import { createDSLStory } from "@player-ui/storybook-addon-player";
import { StackedView } from "@devtools-ui/plugin";

const meta: Meta<typeof StackedView> = {
  title: "Devtools UI Assets/StackedView",
  component: StackedView,
};

export default meta;

export const Basic = createDSLStory(
  () => import("../flows/stacked-view/basic?raw")
);
