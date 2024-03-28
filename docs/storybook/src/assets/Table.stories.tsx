import type { Meta } from "@storybook/react";
import { createDSLStory } from "@player-ui/storybook-addon-player";
import { Table } from "@devtools-ui/plugin";

const meta: Meta<typeof Table> = {
  title: "Devtools UI Assets/Table",
  component: Table,
};

export default meta;

export const Basic = createDSLStory(() => import("../flows/table/basic?raw"));
