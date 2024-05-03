import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "@player-tools/dsl";
import { RadioItem } from "../";

describe("DSL: RadioItem", () => {
  test("Renders radioItem", async () => {
    const rendered = await render(
      <RadioItem value="option" label="Radio Option" />
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "radio-item",
      label: "Radio Option",
      value: "option",
    });
  });
});
