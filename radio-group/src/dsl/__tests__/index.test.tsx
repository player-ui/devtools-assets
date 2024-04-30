import React from "react";
import { describe, expect, test } from "vitest";
import {
  render,
  expression as e,
  binding as b,
  Asset,
} from "@player-tools/dsl";
import { RadioGroup } from "../";

describe("DSL: RadioGroup", () => {
  test("Renders radioGroup", async () => {
    const rendered = await render(
      <RadioGroup exp={e`my_expression`} binding={b`my_binding`}>
        <RadioGroup.Label>
          <Asset type="text">
            <property name="value">Label</property>
          </Asset>
        </RadioGroup.Label>
        <RadioGroup.Value>
          <Asset type="text">
            <property name="value">Value</property>
          </Asset>
        </RadioGroup.Value>
        <RadioGroup.Values>
          <Asset type="text">
            <property name="value">Test 1</property>
          </Asset>
          <Asset type="text">
            <property name="value">Test 2</property>
          </Asset>
        </RadioGroup.Values>
      </RadioGroup>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "radio-group",
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
