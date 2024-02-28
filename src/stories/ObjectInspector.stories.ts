import type { Meta, StoryObj } from "@storybook/react";
import { Data } from "../../lib/components/data";

const meta = {
  title: "Components/ObjectInspector",
  component: Data,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Data>;

const testFunction = () => {
  setTimeout(() => {}, 2000);
};

const promise = new Promise((resolve) => {
  resolve(42);
});

const map = new Map();
map.set("foo", "bar");

const set = new Set();
set.add("test");

export default meta;
type Story = StoryObj<typeof meta>;

const data = {
  string: "string",
  boolean: true,
  number: 100,
  promise,
  null: null,
  map,
  set,
  function: testFunction,
  error: new Error("You broke it"),
  date: new Date(),
  symbol: Symbol("foo"),
  regex: /[A-Z]/g,
  "test-undefined": undefined,
  array: [
    "fun",
    {
      object: {
        nesting: true,
      },
    },
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    9,
    10,
  ],
  object: {
    working: "properly",
    function: testFunction,
  },
};

export const ObjectInspector: Story = {
  args: {
    allBindings: {
      binding: "",
      value: {
        currentValue: data,
      },
    },
    selectedBinding: undefined,
    onSelect: async () => {},
  },
};
