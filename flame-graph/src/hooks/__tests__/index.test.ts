import { useFlameGraphProps } from "..";
import { describe, expect, test } from "vitest";
import type { ProfilerNode, TransformedFlameGraph } from "../../types";

const data: ProfilerNode = {
  name: "root",
  value: 5,
  tooltip: "tooltip",
  children: [
    {
      name: "child1",
      value: 5,
      children: [
        { name: "child1.1", value: 2, children: [] },
        { name: "child1.2", value: 3, children: [] },
      ],
    },
    { name: "child2", children: [] },
  ],
};

const mockProps: TransformedFlameGraph = {
  id: "test",
  type: "flame-graph",
  data,
};

describe("useFlameGraphProps", () => {
  test("transforms data correctly", () => {
    const result = useFlameGraphProps(mockProps);

    expect(result.data).toStrictEqual({
      name: "root",
      value: 5,
      tooltip: "tooltip",
      children: [
        {
          name: "child1",
          value: 5,
          children: [
            { name: "child1.1", value: 2, children: [] },
            { name: "child1.2", value: 3, children: [] },
          ],
        },
        { name: "child2", value: 0, children: [] },
      ],
    });
  });

  test("returns default height and width when not provided", () => {
    const result = useFlameGraphProps(mockProps);

    expect(result.height).toBe(500);
    expect(result.width).toBe(500);
  });

  test("returns provided height and width", () => {
    const result = useFlameGraphProps({
      ...mockProps,
      height: 300,
      width: 300,
    });

    expect(result.height).toBe(300);
    expect(result.width).toBe(300);
  });
});
