import React from "react";
import { describe, expect, test } from "vitest";
import { render, expression as e, Asset } from "@player-tools/dsl";
import { Action } from "../Action";

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
        <Action.Label>Label</Action.Label>
      </Action>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "action",
      label: {
        asset: {
          id: "label",
          type: "text",
          value: "Label",
        },
      },
    });
  });

  test("action with exp", async () => {
    const rendered = await render(
      <Action exp={e`noop`}>
        <Action.Label>Label</Action.Label>
      </Action>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "action",
      exp: "noop",
      label: {
        asset: {
          id: "label",
          type: "text",
          value: "Label",
        },
      },
    });
  });

  test("action with icon", async () => {
    const rendered = await render(
      <Action exp={e`noop`}>
        <Action.Label>Label</Action.Label>
        <Action.Icon>
          <Asset type="icon">
            <property name="value">SomeIcon</property>
          </Asset>
        </Action.Icon>
      </Action>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "action",
      exp: "noop",
      label: {
        asset: {
          id: "label",
          type: "text",
          value: "Label",
        },
      },
      icon: {
        asset: {
          id: "icon",
          type: "icon",
          value: "SomeIcon",
        },
      },
    });
  });

  test("action with metadata", async () => {
    const rendered = await render(
      <Action
        metaData={{
          isLoading: true,
          variant: "solid",
          iconPosition: "left",
        }}
      />
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "action",
      metaData: {
        isLoading: true,
        variant: "solid",
        iconPosition: "left",
      },
    });
  });

  test("action with collection of text", async () => {
    const rendered = await render(
      <Action>
        <Action.Label>
          <Asset type="text">
            <property name="value">Some</property>
          </Asset>
          <Asset type="text">
            <property name="value">Text</property>
          </Asset>
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
