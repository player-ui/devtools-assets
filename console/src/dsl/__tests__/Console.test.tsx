import React from "react";
import { describe, expect, test } from "vitest";
import { render, Asset, binding as b } from "@player-tools/dsl";
import { Console } from "../Console";

describe("DSL: Console View", () => {
  test("Renders default console", async () => {
    const rendered = await render(
      <Console
        expression={b`test.Expression`}
        history={b`history.expression`}
      />
    );

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "console",
      expression: "test.Expression",
      history: "history.expression",
    });
  });

  test("Renders console with history and no current expression", async () => {
    const rendered = await render(
      <Console expression={b`test.Expression`} history={b`history.expression`}>
        <Console.Values>
          <Asset type="text">
            <property name="expression">Some Expression</property>
            <property name="result">Some Result</property>
          </Asset>
          <Asset type="text">
            <property name="expression">Other Expression</property>
          </Asset>
        </Console.Values>
      </Console>
    );

    expect(rendered.jsonValue).toStrictEqual({
      evaluations: [
        {
          expression: "Some Expression",
          id: "evaluations-0",
          result: "Some Result",
          type: "text",
        },
        {
          expression: "Other Expression",
          id: "evaluations-1",
          type: "text",
        },
      ],
      id: "root",
      type: "console",
      expression: "test.Expression",
      history: "history.expression",
    });
  });
});
