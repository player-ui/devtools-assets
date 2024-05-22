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
  <ObjectInspector binding={bindings.foo} filter={true}>
    <ObjectInspector.Label>With Filter</ObjectInspector.Label>
  </ObjectInspector>
);
const flow: DSLFlow = {
  id: "object-inspector-filter",
  views: [view1],
  data: {
    foo: {
      bar: {
        a: "something",
        b: "else",
        c: {
          test: "test",
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
