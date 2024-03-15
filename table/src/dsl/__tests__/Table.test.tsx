import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "@player-tools/dsl";
import { Table } from "../Table";

describe("DSL: Table", () => {
  test("with value", async () => {
    const sampleData = [
      { key1: "value1", key2: "value1", key3: "value1" },
      { key1: "value2", key2: "value2", key3: "value2" },
      { key1: "value3", key2: "value3", key3: "value3" },
    ];

    const rendered = await render(<Table data={sampleData}></Table>);

    expect(rendered.jsonValue).toStrictEqual({
      id: "root",
      type: "table",
      data: [
        { key1: "value1", key2: "value1", key3: "value1" },
        { key1: "value2", key2: "value2", key3: "value2" },
        { key1: "value3", key2: "value3", key3: "value3" },
      ],
    });
  });
});
