import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "@player-tools/dsl";
import { Text } from "../Text";

describe("DSL: Text", () => {
  test("with value", async () => {
    const rendered = await render(<Text>Value</Text>);

    expect(rendered.jsonValue).toMatchInlineSnapshot();
  });

  test("with value and size", async () => {
    const rendered = await render(<Text size="md">Value</Text>);

    expect(rendered.jsonValue).toMatchInlineSnapshot();
  });

  test("with value and element override", async () => {
    const rendered = await render(<Text as="b">Value</Text>);

    expect(rendered.jsonValue).toMatchInlineSnapshot();
  });
});
