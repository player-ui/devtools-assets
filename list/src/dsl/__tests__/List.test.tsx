import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "@player-tools/dsl";
import { List } from "../List";

describe("DSL: List", () => {
  test("with value", async () => {
    const rendered = await render(<List>Value</Text>);

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "text",
      value: "Value",
    });
  });

  test("with value and size", async () => {
    const rendered = await render(<List size="md">Value</Text>);

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "text",
      value: "Value",
      size: "md",
    });
  });

  test("with value and element override", async () => {
    const rendered = await render(<Text as="b">Value</Text>);

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "text",
      value: "Value",
      as: "b",
    });
  });
});
