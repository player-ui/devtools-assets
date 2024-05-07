import React from "react";
import { describe, expect, test } from "vitest";
import { render, binding as b } from "@player-tools/dsl";
import { Input } from "../Input";

describe("DSL: Input", () => {
  test("Renders default input", async () => {
    const rendered = await render(<Input binding={b`binding`} />);

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "input",
      binding: "binding",
    });
  });

  test("Renders input with size, placeholder and maxLength", async () => {
    const rendered = await render(
      <Input
        size={"md"}
        placeholder={"User input"}
        maxLength={10}
        binding={b`binding`}
      />
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "input",
      placeholder: "User input",
      size: "md",
      maxLength: 10,
      binding: "binding",
    });
  });

  test("Renders input with label, binding and note", async () => {
    const rendered = await render(
      <Input binding={b`binding`}>
        <Input.Label>Label</Input.Label>
        <Input.Note>Some note</Input.Note>
      </Input>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "input",
      label: {
        asset: {
          id: "label",
          type: "text",
          value: "Label",
        },
      },
      note: {
        asset: {
          id: "note",
          type: "text",
          value: "Some note",
        },
      },
      binding: "binding",
    });
  });

  test("It should render a file uploader version of Input asset", async () => {
    const rendered = await render(
      <Input binding={b`binding`} file={true}>
        <Input.Label>Label</Input.Label>
      </Input>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "input",
      file: true,
      label: {
        asset: {
          id: "label",
          type: "text",
          value: "Label",
        },
      },
      binding: "binding",
    });
  });
});
