import React from "react";
import { describe, expect, test } from "vitest";
import { render, binding as b, Asset } from "@player-tools/dsl";
import { RadioGroup } from "../";

describe("DSL: RadioGroup", () => {
  test("Renders radioGroup with a couple options", async () => {
    const rendered = await render(
      <RadioGroup binding={b`my_binding`}>
        <RadioGroup.Label>RadioGroup Label</RadioGroup.Label>
        <RadioGroup.Values>
          <Asset type="radio-item">
            <property name="value">Option 1</property>
            <property name="radio">opt1</property>
          </Asset>
          <Asset type="radio-item">
            <property name="value">Option 2</property>
            <property name="radio">opt2</property>
          </Asset>
        </RadioGroup.Values>
      </RadioGroup>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "radio-group",
      binding: "my_binding",
      label: {
        asset: {
          id: "label",
          type: "text",
          value: "RadioGroup Label",
        },
      },
      values: [
        {
          asset: {
            id: "values-0",
            type: "radio-item",
            value: "Option 1",
            radio: "opt1",
          },
        },
        {
          asset: {
            id: "values-1",
            type: "radio-item",
            value: "Option 2",
            radio: "opt2",
          },
        },
      ],
    });
  });
});
