import React from "react";
import { describe, expect, test } from "vitest";
import { render, Asset } from "@player-tools/dsl";
import { Info } from "../";

describe("DSL: Info", () => {
  test("Renders info view", async () => {
    const rendered = await render(
      <Info>
        <Info.Header>
          <Asset type="text">
            <property name="value">Header</property>
          </Asset>
        </Info.Header>
        <Info.Main>
          <Asset type="text">
            <property name="value">Main</property>
          </Asset>
        </Info.Main>
        <Info.Footer>
          <Asset type="text">
            <property name="value">Footer</property>
          </Asset>
        </Info.Footer>
      </Info>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "info",
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
