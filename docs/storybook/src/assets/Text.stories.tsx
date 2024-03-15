import type { Meta } from "@storybook/react";
import { createDSLStory } from "@player-ui/storybook-addon-player";
import { Text } from "@devtools-ui/plugin";

const meta: Meta<typeof Text> = {
  title: "Devtools UI Assets/Text",
  component: Text,
};

export default meta;

export const Basic = createDSLStory(() => import("../flows/text/basic?raw"));
