import type { Meta } from "@storybook/react";
import { createDSLStory } from "@player-ui/storybook-addon-player";
import { RadioGroup } from "@devtools-ui/plugin";

const meta: Meta<typeof RadioGroup> = {
  title: "Devtools UI Assets/RadioGroup",
  component: RadioGroup,
};

export default meta;

export const Basic = createDSLStory(() => import("../flows/radio-group/basic?raw"));


