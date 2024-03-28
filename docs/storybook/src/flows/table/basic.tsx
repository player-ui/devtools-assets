import React from "react";
import { Table } from "@devtools-ui/plugin";
import type { DSLFlow, DSLSchema } from "@player-tools/dsl";
import { makeBindingsForObject } from "@player-tools/dsl";

const schema = {
  my_table: [
    {
      id: { type: "StringType" },
      type: { type: "StringType" },
      message: { type: "StringType" },
      severity: { type: "StringType" },
    },
  ] as [DSLSchema],
};

const bindings = makeBindingsForObject(schema);

const view1 = <Table binding={bindings.my_table} />;

const flow: DSLFlow = {
  id: "table-basic",
  views: [view1],
  data: {
    my_table: [
      {
        id: "0",
        type: "error",
        message: "This is an error message",
        severity: "error",
      },
      {
        id: "1",
        type: "metrics",
        message: "It is a metrics message",
      },
      {
        id: "2",
        type: "log",
        message: "Data changed",
      },
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
