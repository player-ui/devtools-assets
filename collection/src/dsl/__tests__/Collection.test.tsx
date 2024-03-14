import React from "react";
import { describe, expect, test } from "vitest";
import { Asset, render } from "@player-tools/dsl";
import { Collection } from "../Collection";

describe("DSL: Collection", () => {
  test("with values", async () => {
    const rendered = await render(
      <Collection>
        <Collection.Values>
          <Asset type="text">
            <property name="value">Test 1</property>
          </Asset>
          <Asset type="text">
            <property name="value">Test 2</property>
          </Asset>
        </Collection.Values>
      </Collection>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "collection",
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
