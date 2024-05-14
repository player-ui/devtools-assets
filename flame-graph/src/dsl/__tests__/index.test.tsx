import React from "react";
import { describe, expect, test } from "vitest";
import { render, binding as b } from "@player-tools/dsl";
import { FlameGraph } from "../";

describe("DSL: FlameGraph", () => {
  test("Renders flameGraph", async () => {
    const rendered = await render(
      <FlameGraph binding={b`my_binding`} height={100} width={200} />
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "flame-graph",
      binding: "my_binding",
      height: 100,
      width: 200,
    });
  });
});
