import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "@player-tools/dsl";
import { Navigation } from "../index";

describe("DSL: Navigation", () => {
  test("Renders navigation", async () => {
    const rendered = await render(<Navigation></Navigation>);

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "navigation",
    });
  });

  test("Renders navigation with actions", async () => {
    const rendered = await render(
      <Navigation>
        <Navigation.Actions>Test</Navigation.Actions>
      </Navigation>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "navigation",
      actions: [
        {
          asset: {
            id: "actions-0",
            type: "text",
            value: "Test",
          },
        },
      ],
    });
  });
});
