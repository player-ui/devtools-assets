import type { Meta, StoryObj } from '@storybook/react';
import { Console } from '../../lib/components/console/';


const meta = {
  title: 'Components/Console',
  component: Console,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Console>;


export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultConsole: Story = {
  args: {
    onExecute: (string)=>string,
  },

};

