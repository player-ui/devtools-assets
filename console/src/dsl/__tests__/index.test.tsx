import React from "react";
import { describe, expect, test } from "vitest";
import { render, expression as e, binding as b } from "@player-tools/dsl";
import { Console } from "../";

describe("DSL: Console", () => {
  test("Renders console", async () => {
    const rendered = await render(
      <Console exp={e`my_expression`} binding={b`my_binding`} />
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "console",
      exp: "my_expression",
      binding: "my_binding",
    });
  });
});
