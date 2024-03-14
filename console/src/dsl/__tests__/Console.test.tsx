import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "@player-tools/dsl";
import { Console } from "../Console";

describe("DSL: Console View", () => {
  test("Renders default console", async () => {
    const rendered = await render(<Console />);

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "console",
    });
  });
});
