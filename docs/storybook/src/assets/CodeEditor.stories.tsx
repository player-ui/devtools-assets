import type { Meta } from "@storybook/react";
import { createDSLStory } from "@player-ui/storybook-addon-player";
import { CodeEditor } from "@devtools-ui/plugin";

const meta: Meta<typeof CodeEditor> = {
  title: "Devtools UI Assets/CodeEditor",
  component: CodeEditor,
};

export default meta;

export const Basic = createDSLStory(
  () => import("../flows/code-editor/basic?raw")
);
