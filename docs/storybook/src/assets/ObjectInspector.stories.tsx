import type { Meta } from "@storybook/react";
import { createDSLStory } from "@player-ui/storybook-addon-player";
import { ObjectInspector } from "@devtools-ui/plugin";

const meta: Meta<typeof ObjectInspector> = {
  title: "Devtools UI Assets/ObjectInspector",
  component: ObjectInspector,
};

export default meta;

export const Basic = createDSLStory(
  () => import("../flows/object-inpector/basic?raw")
);
