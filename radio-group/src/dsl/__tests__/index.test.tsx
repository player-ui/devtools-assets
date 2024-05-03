import React from "react";
import { describe, expect, test } from "vitest";
import { render, binding as b, Asset } from "@player-tools/dsl";
import { RadioItem } from "@devtools-ui/radio-item";
import { RadioGroup } from "../";

describe("DSL: RadioGroup", () => {
  test("Renders radioGroup with a couple options", async () => {
    const rendered = await render(
      <RadioGroup binding={b`my_binding`}>
        <RadioGroup.Label>RadioGroup Label</RadioGroup.Label>
        <RadioGroup.Values>
          <RadioItem label="Option 1" value="opt1" />
          <RadioItem label="Option 2" value="opt2" />
        </RadioGroup.Values>
      </RadioGroup>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "radio-group",
      binding: "my_binding",
      groupLabel: {
        asset: {
          id: "groupLabel",
          type: "text",
          value: "RadioGroup Label",
        },
      },
      values: [
        {
          asset: {
            type: "radio-item",
            id: "values-0",
            label: "Option 1",
            value: "opt1",
          },
        },
        {
          asset: {
            type: "radio-item",
            id: "values-1",
            label: "Option 2",
            value: "opt2",
          },
        },
      ],
    });
  });
});
