import React from "react";
import { Toggle } from "@devtools-ui/plugin";
import type { DSLFlow } from "@player-tools/dsl";
import { makeBindingsForObject } from "@player-tools/dsl";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const schema: any = {
  label: {
    type: "StringType",
  },
  value: {
    type: "StringType",
  },
};

const data = makeBindingsForObject(schema);

const view1 = (
  <Toggle binding={data.value}>
    <Toggle.Label>{data.label}</Toggle.Label>
  </Toggle>
);

const flow: DSLFlow = {
  id: "toggle-basic",
  views: [view1],
  data: {
    value: false,
    label: "Toggle test",
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
