import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "@player-tools/dsl";
import { Input } from "../Input";

describe("DSL: Input", () => {
  test("Renders default input", async () => {
    const rendered = await render(<Input />);

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "input",
    });
  });

  test("Renders input with size, placeholder and maxLength", async () => {
    const rendered = await render(
      <Input size={"small"} placeholder={"User input"} maxLength={10} />
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "input",
      placeholder: "User input",
      size: "small",
      maxLength: 10,
    });
  });

  test("Renders input with label and value", async () => {
    const rendered = await render(
      <Input binding="myBinding">
        <Input.Label>My Label</Input.Label>
      </Input>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "input",
      label: {
        asset: {
          id: "label",
          type: "text",
          value: "My Label",
        },
      },
      binding: "myBinding",
    });
  });
});
