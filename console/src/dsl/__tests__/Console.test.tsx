import React from "react";
import { describe, expect, test } from "vitest";
import {
  render,
  Asset,
  binding as b,
  expression as e,
} from "@player-tools/dsl";
import { Console } from "../Console";

describe("DSL: Console View", () => {
  test("Renders default console", async () => {
    const rendered = await render(
      <Console exp={e`test.Expression`} binding={b`history.binding`} />
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "console",
      exp: "test.Expression",
      binding: "history.binding",
    });
  });
});
