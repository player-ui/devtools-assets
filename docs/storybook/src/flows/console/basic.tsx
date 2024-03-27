import React from "react";
import type { DSLFlow, DSLSchema } from "@player-tools/dsl";
import { expression as e, makeBindingsForObject } from "@player-tools/dsl";
import { Console } from "@devtools-ui/plugin";

const schema: any = {
  expression: { type: "StringType" },
  history: [
    {
      id: { type: "StringType" },
      expression: { type: "StringType" },
      result: { type: "StringType" },
      severity: { type: "StringType" },
    },
  ] as [DSLSchema],
};

const bindings = makeBindingsForObject(schema);

const view1 = (
  <Console
    exp={e`publish('evaluate-expression', ${bindings.expression})`}
    binding={bindings.history}
  />
);

const flow: DSLFlow = {
  id: "console-basic",
  views: [view1],
  data: {
    expression: "",
    history: [
      { id: "0", expression: "1 + 1", result: "2" },
      { id: "1", expression: "1 / 0", result: "Infinity", severity: "error" },
      { id: "2", expression: "1 + a", result: "1a", severity: "warning" },
    ],
  },
  schema,
  navigation: {
    BEGIN: "FLOW_1",
    FLOW_1: {
      startState: "VIEW_1",
      VIEW_1: {
        state_type: "VIEW",
        ref: view1,
        transitions: {
          "*": "END_Done",
        },
      },
      END_Done: {
        state_type: "END",
        outcome: "DONE",
      },
    },
  },
};

export default flow;
