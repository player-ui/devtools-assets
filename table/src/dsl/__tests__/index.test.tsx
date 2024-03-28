import React from "react";
import { describe, expect, test } from "vitest";
import { render, binding as b } from "@player-tools/dsl";
import { Table } from "../";

describe("DSL: Table", () => {
  test("Renders table", async () => {
    const rendered = await render(<Table binding={b`my_binding`} />);

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "table",
      binding: "my_binding",
    });
  });
});
