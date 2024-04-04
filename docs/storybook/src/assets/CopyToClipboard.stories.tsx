import type { Meta } from "@storybook/react";
import { createDSLStory } from "@player-ui/storybook-addon-player";
import { CopyToClipboard } from "@devtools-ui/plugin";

const meta: Meta<typeof CopyToClipboard> = {
  title: "Devtools UI Assets/CopyToClipboard",
  component: CopyToClipboard,
};

export default meta;

export const Basic = createDSLStory(
  () => import("../flows/copy-to-clipboard/basic?raw")
);
