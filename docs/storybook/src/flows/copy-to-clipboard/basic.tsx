import React from "react";
import { CopyToClipboard, Text } from "@devtools-ui/plugin";
import type { DSLFlow } from "@player-tools/dsl";
import { makeBindingsForObject } from "@player-tools/dsl";

const schema = {
  foo: {
    bar: {
      a: { type: "StringType" },
      b: { type: "StringType" },
    },
  },
};

const bindings = makeBindingsForObject(schema);

const view1 = (
  <CopyToClipboard binding={bindings.foo}>
    <CopyToClipboard.Label>
      <Text>Copy to clipboard</Text>
    </CopyToClipboard.Label>
  </CopyToClipboard>
);

const flow: DSLFlow = {
  id: "copy-to-clipboard-basic",
  views: [view1],
  data: {
    foo: {
      bar: {
        a: "a_content",
        b: "b_content",
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
