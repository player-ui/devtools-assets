import React from "react";
import { Toggle, Text } from "@devtools-ui/plugin";
import type { DSLFlow } from "@player-tools/dsl";
import { expression as e, makeBindingsForObject } from "@player-tools/dsl";

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
  <Toggle exp={e`my_expression`} binding={b`my_binding`}>
    <Toggle.Label>{data.label}</Toggle.Label>
    <Toggle.Value>{data.value}</Toggle.Value>
    <Toggle.Values>
      <Text>First Value</Text>
      <Text>Second Value</Text>
    </Toggle.Values>
  </Toggle>
);

const flow: DSLFlow = {
  id: "toggle-basic",
  views: [view1],
  data: {
    count: 0,
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
