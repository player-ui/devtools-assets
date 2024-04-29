import React from "react";
import { describe, expect, test } from "vitest";
import {
  render,
  expression as e,
  binding as b,
  Asset,
} from "@player-tools/dsl";
import { Toggle } from "../";

describe("DSL: Toggle", () => {
  test("Renders toggle", async () => {
    const rendered = await render(
      <Toggle exp={e`my_expression`} binding={b`my_binding`}>
        <Toggle.Label>
          <Asset type="text">
            <property name="value">Label</property>
          </Asset>
        </Toggle.Label>
        <Toggle.Value>
          <Asset type="text">
            <property name="value">Value</property>
          </Asset>
        </Toggle.Value>
        <Toggle.Values>
          <Asset type="text">
            <property name="value">Test 1</property>
          </Asset>
          <Asset type="text">
            <property name="value">Test 2</property>
          </Asset>
        </Toggle.Values>
      </Toggle>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "toggle",
      label: {
        asset: {
          id: "label",
          type: "text",
          value: "Label",
        },
      },
      value: {
        asset: {
          id: "value",
          type: "text",
          value: "Value",
        },
      },
      values: [
        {
          asset: {
            id: "values-0",
            type: "text",
            value: "Test 1",
          },
        },
        {
          asset: {
            id: "values-1",
            type: "text",
            value: "Test 2",
          },
        },
      ],
    });
  });
});
