import React from "react";
import { describe, expect, test } from "vitest";
import { render, expression as e, binding as b } from "@player-tools/dsl";
import { Toggle } from "../";

describe("DSL: Toggle", () => {
  test("Renders toggle", async () => {
    const rendered = await render(
      <Toggle binding={b`my_binding`}>
        <Toggle.Label>Toggle Label</Toggle.Label>
      </Toggle>
    );

    expect(rendered.jsonValue).toStrictEqual({
      type: "toggle",
      binding: "my_binding",
      id: "root",
      label: {
        asset: {
          id: "label",
          type: "text",
          value: "Toggle Label",
        },
      },
    });
  });
});
