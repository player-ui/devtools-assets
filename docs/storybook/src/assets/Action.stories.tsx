import type { Meta } from "@storybook/react";
import { createDSLStory } from "@player-ui/storybook-addon-player";
import { Action } from "@devtools-ui/plugin";

const meta: Meta<typeof Action> = {
  title: "Devtools UI Assets/Action",
  component: Action,
};

export default meta;

export const Basic = createDSLStory(() => import("../flows/action/basic?raw"));

export const Transitions = createDSLStory(
  () => import("../flows/action/transitions?raw")
);
