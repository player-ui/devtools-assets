import React from "react";
import { describe, expect, test } from "vitest";
import { Asset, render } from "@player-tools/dsl";
import { List } from "../List";

describe("DSL: List", () => {
  test("with value", async () => {
    const rendered = await render(
      <List>
        <List.Values>
          <Asset type="text">
            <property name="value">Test 1</property>
          </Asset>
          <Asset type="text">
            <property name="value">Test 2</property>
          </Asset>
        </List.Values>
      </List>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "list",
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
