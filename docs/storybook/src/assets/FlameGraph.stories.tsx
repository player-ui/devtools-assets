import type { Meta } from "@storybook/react";
import { createDSLStory } from "@player-ui/storybook-addon-player";
import { FlameGraph } from "@devtools-ui/plugin";

const meta: Meta<typeof FlameGraph> = {
  title: "Devtools UI Assets/FlameGraph",
  component: FlameGraph,
};

export default meta;

export const Basic = createDSLStory(
  () => import("../flows/flame-graph/basic?raw")
);
