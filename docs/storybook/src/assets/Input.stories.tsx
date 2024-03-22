import type { Meta } from "@storybook/react";
import { createDSLStory } from "@player-ui/storybook-addon-player";
import { Input } from "@devtools-ui/plugin";

const meta: Meta<typeof Input> = {
  title: "Devtools UI Assets/Input",
  component: Input,
};

export default meta;

export const Basic = createDSLStory(() => import("../flows/input/basic?raw"));
