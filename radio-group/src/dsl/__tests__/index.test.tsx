import React from "react";
import { describe, expect, test } from "vitest";
import { render, binding as b } from "@player-tools/dsl";
import { RadioGroup } from "../";

describe("DSL: RadioGroup", () => {
  test("Renders radioGroup with a couple options", async () => {
    const rendered = await render(
      <RadioGroup binding={b`my_binding`}>
        <RadioGroup.Label>RadioGroup Label</RadioGroup.Label>
        <RadioGroup.Values>
          <RadioGroup.Values.Value value="opt1">
            <RadioGroup.Values.Value.Label>
              Option 1
            </RadioGroup.Values.Value.Label>
          </RadioGroup.Values.Value>
          <RadioGroup.Values.Value value="opt2">
            <RadioGroup.Values.Value.Label>
              Option 2
            </RadioGroup.Values.Value.Label>
          </RadioGroup.Values.Value>
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
          label: {
            asset: {
              id: "label",
              type: "text",
              value: "Option 1",
            },
          },
          value: "opt1",
        },
        {
          label: {
            asset: {
              id: "label",
              type: "text",
              value: "Option 2",
            },
          },
          value: "opt2",
        },
      ],
    });
  });
});
