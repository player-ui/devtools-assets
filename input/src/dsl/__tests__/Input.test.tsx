import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "@player-tools/dsl";
import { Input } from "../Input";

describe("DSL: Input", () => {
  test("Renders default input", async () => {
    const rendered = await render(<Input>My input</Input>);

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "input",
      value: "My input",
    });
  });

  test("Renders input with size and placeholder", async () => {
    const rendered = await render(<Input size={'small'} placeholder={'User input'}>My input</Input>);

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "input",
      value: "My input",
    });
  });

  test("Renders input with label", async () => {
    const rendered = await render(
      <Input>
        <Input.Label>
          Input Label
        </Input.Label>
        My value
      </Input>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "input",
      value: "My value",
    });
  });
});
