import React from "react";
import { describe, expect, test } from "vitest";
import { render, binding as b } from "@player-tools/dsl";
import { CopyToClipboard } from "../";

describe("DSL: CopyToClipboard", () => {
  test("Renders copy-to-clipboard", async () => {
    const rendered = await render(
      <CopyToClipboard binding={b`my_binding`}>
        <CopyToClipboard.Label>Copy to clipboard</CopyToClipboard.Label>
      </CopyToClipboard>
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "copy-to-clipboard",
      binding: "my_binding",
      label: {
        asset: {
          id: "label",
          type: "text",
          value: "Copy to clipboard",
        },
      },
    });
  });
});
