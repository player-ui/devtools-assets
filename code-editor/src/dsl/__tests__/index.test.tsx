import React from "react";
import { describe, expect, test } from "vitest";
import { render, expression as e, binding as b } from "@player-tools/dsl";
import { CodeEditor } from "../";

describe("DSL: CodeEditor", () => {
  test("Renders code-editor", async () => {
    const rendered = await render(
      <CodeEditor exp={e`my_expression`} binding={b`my_binding`} />
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "code-editor",
      exp: "my_expression",
      binding: "my_binding",
    });
  });
});
