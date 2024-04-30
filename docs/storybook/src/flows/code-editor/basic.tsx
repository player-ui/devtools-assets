import React from "react";
import type { Schema } from "@player-ui/types";
import {
  expression as e,
  makeBindingsForObject,
  type DSLFlow,
} from "@player-tools/dsl";
import { CodeEditor } from "@devtools-ui/plugin";

const RecordType: Schema.DataType<Record<string, unknown>> = {
  type: "RecordType",
};

const schema = {
  code: { type: "StringType" },
  flow: RecordType,
};

const bindings = makeBindingsForObject(schema);

const view1 = (
  <CodeEditor
    exp={e`beacon('override-flow', ${bindings.code})`}
    binding={bindings.flow}
  />
);

const flow: DSLFlow = {
  id: "console-basic",
  views: [view1],
  data: {
    code: "",
    flow: {
      id: "initial-flow",
      views: [
        {
          id: "view-1",
          type: "text",
          value: "connecting...",
        },
      ],
      navigation: {
        BEGIN: "FLOW_1",
        FLOW_1: {
          startState: "VIEW_1",
          VIEW_1: {
            state_type: "VIEW",
            ref: "view-1",
            transitions: {},
          },
        },
      },
    },
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
