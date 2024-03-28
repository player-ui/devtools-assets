import React from "react";
import { describe, expect, test } from "vitest";
import { render, Asset } from "@player-tools/dsl";
import { StackedView } from "../";

describe("DSL: StackedView", () => {
  test("Renders stacked-view view", async () => {
    const rendered = await render(
      <StackedView>
        <StackedView.Header>
          <Asset type="text">
            <property name="value">Header</property>
          </Asset>
        </StackedView.Header>
        <StackedView.Main>
          <Asset type="text">
            <property name="value">Main</property>
          </Asset>
        </StackedView.Main>
        <StackedView.Footer>
          <Asset type="text">
            <property name="value">Footer</property>
          </Asset>
        </StackedView.Footer>
      </StackedView>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "stacked-view",
      header: {
        asset: {
          id: "header",
          type: "text",
          value: "Header",
        },
      },
      main: {
        asset: {
          id: "main",
          type: "text",
          value: "Main",
        },
      },
      footer: {
        asset: {
          id: "footer",
          type: "text",
          value: "Footer",
        },
      },
    });
  });
});
