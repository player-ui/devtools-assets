import React from "react";
import { ObjectInspector } from "@devtools-ui/plugin";
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
  <ObjectInspector binding={bindings.foo}>
    <ObjectInspector.Label>Label</ObjectInspector.Label>
  </ObjectInspector>
);

const flow: DSLFlow = {
  id: "object-inspector-basic",
  views: [view1],
  data: {
    foo: {
      bar: {
        a: "a_content",
        b: "b_content",
      },
    },
  },
  // TODO: update @devtools-ui version to 0.5.1
  schema: schema as unknown as DSLFlow["schema"],
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
