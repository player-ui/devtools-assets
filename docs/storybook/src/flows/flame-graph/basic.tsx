import React from "react";
import { FlameGraph } from "@devtools-ui/plugin";
import type { DSLFlow } from "@player-tools/dsl";
import { expression as e, makeBindingsForObject } from "@player-tools/dsl";
import type { Schema } from "@player-ui/types";

const RecordType: Schema.DataType<Record<string, unknown>> = {
  type: "RecordType",
};

const schema = {
  profilerData: RecordType,
};

const data = makeBindingsForObject(schema);

const view1 = <FlameGraph binding={data.profilerData} />;

const flow: DSLFlow = {
  id: "flame-graph-basic",
  views: [view1],
  data: {
    profilerData: {
      name: "root",
      value: 12,
      tooltip: "root tooltip",
      children: [
        {
          name: "child1",
          value: 5,
          children: [
            {
              name: "child1.1",
              value: 2,
              tooltip: "child 1.1 tooltip",
              children: [],
            },
            {
              name: "child1.2",
              value: 3,
              tooltip: "child 1.2 tooltip",
              children: [],
            },
          ],
        },
        {
          name: "child2",
          value: 5,
          children: [
            {
              name: "child2.1",
              value: 2,
              tooltip: "child 2.1 tooltip",
              children: [],
            },
            {
              name: "child2.2",
              value: 2,
              tooltip: "child 2.2 tooltip",
              children: [],
            },
            { name: "child2.3", value: 1, children: [] },
          ],
        },
        {
          name: "child2",
          value: 2,
          children: [],
        },
      ],
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
