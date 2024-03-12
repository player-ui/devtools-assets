import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "@player-tools/dsl";
import { ListItem } from "../ListItem";

describe("DSL: ListItem", () => {
  test("with value", async () => {
    const data = { content: "", type: "", message: "" };
    const rendered = await render(<ListItem></ListItem>);

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "list-item",
    });
  });
});
