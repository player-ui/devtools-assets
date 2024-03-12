import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "@player-tools/dsl";
import { Navigation } from "../index";

describe("DSL: Navigation", () => {
  test("Renders navigation", async () => {
    const rendered = await render(<Navigation actions={[]}></Navigation>);

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "navigation",
      actions: [],
    });
  });
});
