import React from "react";
import { describe, expect, test } from "vitest";
import { render, binding as b } from "@player-tools/dsl";
import { ObjectInspector } from "../ObjectInspector";

describe("DSL: Object Inspector", () => {
  test("basic", async () => {
    const rendered = await render(
      <ObjectInspector binding={b`foo`}>
        <ObjectInspector.Label>Hello</ObjectInspector.Label>
      </ObjectInspector>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "object-inspector",
      binding: "foo",
      label: {
        asset: {
          id: "label",
          type: "text",
          value: "Hello",
        },
      },
    });
  });

  test("with filter", async () => {
    const rendered = await render(
      <ObjectInspector binding={b`foo`} filter>
        <ObjectInspector.Label>With Filter</ObjectInspector.Label>
      </ObjectInspector>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "object-inspector",
      binding: "foo",
      filter: true,
      label: {
        asset: {
          id: "label",
          type: "text",
          value: "With Filter",
        },
      },
    });
  });
});
