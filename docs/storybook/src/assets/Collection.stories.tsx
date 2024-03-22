import type { Meta } from "@storybook/react";
import { createDSLStory } from "@player-ui/storybook-addon-player";
import { Collection } from "@devtools-ui/plugin";

const meta: Meta<typeof Collection> = {
  title: "Devtools UI Assets/Collection",
  component: Collection,
};

export default meta;

export const Basic = createDSLStory(
  () => import("../flows/collection/basic?raw")
);
