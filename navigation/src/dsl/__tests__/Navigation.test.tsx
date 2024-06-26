import React from "react";
import { describe, expect, test } from "vitest";
import { Asset, render } from "@player-tools/dsl";
import { Navigation } from "../index";

describe("DSL: Navigation", () => {
  test("Renders navigation", async () => {
    const rendered = await render(<Navigation></Navigation>);

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "navigation",
    });
  });

  test("Renders navigation with an action", async () => {
    const rendered = await render(
      <Navigation>
        <Navigation.Values>
          <Asset type="action" />
          <Asset type="action" />
        </Navigation.Values>
      </Navigation>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "navigation",
      values: [
        {
          asset: {
            id: "values-0",
            type: "action",
          },
        },
        {
          asset: {
            id: "values-1",
            type: "action",
          },
        },
      ],
    });
  });
});
