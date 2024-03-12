import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "@player-tools/dsl";
import { ObjectInspector } from "../ObjectInspector";

describe("DSL: Object Inspector", () => {
  test("with value", async () => {
    const rendered = await render(<ObjectInspector></ObjectInspector>);

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "object-inspector",
    });
  });

  test("with value and size", async () => {
    const rendered = await render(
      <ObjectInspector>
        <ObjectInspector.Label>Hello</ObjectInspector.Label>
      </ObjectInspector>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "object-inspector",
      label: {
        asset: {
          id: "label",
          type: "text",
          value: "Hello",
        },
      },
    });
  });
});
