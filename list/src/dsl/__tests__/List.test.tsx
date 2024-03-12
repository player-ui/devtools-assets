import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "@player-tools/dsl";
import { List } from "../List";

describe("DSL: List", () => {
  test("with value", async () => {
    const rendered = await render(<List></List>);

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "list",
    });
  });
});
