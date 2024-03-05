import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "@player-tools/dsl";
import { Action } from "../Action";
import { Text } from "@devtools-ui/text";

describe("DSL: Action", () => {
  test("Renders action", async () => {
    const rendered = await render(<Action></Action>);

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "action",
    });
  });

  test("action with label", async () => {
    const rendered = await render(
      <Action>
        <Action.Label>Value</Action.Label>
      </Action>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "action",
      label: {
        asset: {
          id: "label",
          type: "text",
          value: "Value",
        },
      },
    });
  });

  test("action with collection of text", async () => {
    const rendered = await render(
      <Action>
        <Action.Label>
          <Text>Some</Text>
          <Text>Text</Text>
        </Action.Label>
      </Action>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "action",
      label: {
        asset: {
          id: "label",
          type: "collection",
          values: [
            {
              asset: {
                id: "label-values-0",
                type: "text",
                value: "Some",
              },
            },
            {
              asset: {
                id: "label-values-1",
                type: "text",
                value: "Text",
              },
            },
          ],
        },
      },
    });
  });
});
