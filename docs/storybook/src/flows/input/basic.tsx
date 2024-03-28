import React from "react";
import { Input } from "@devtools-ui/plugin";
import { DSLFlow, makeBindingsForObject } from "@player-tools/dsl";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const schema: any = {
  content: {
    type: "StringType",
  },
};

const bindings = makeBindingsForObject(schema);

const view1 = (
  <Input
    binding={bindings.content}
    size={"md"}
    placeholder={"User input"}
    maxLength={10}
  >
    <Input.Label>Label</Input.Label>
    <Input.Note>Some note</Input.Note>
  </Input>
);

const flow: DSLFlow = {
  id: "input-basic",
  views: [view1],
  data: {
    content: "testing...",
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
