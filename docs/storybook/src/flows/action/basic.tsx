import React from "react";
import { Action } from "@devtools-ui/plugin";
import type { DSLFlow } from "@player-tools/dsl";
import { expression as e, makeBindingsForObject } from "@player-tools/dsl";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const schema: any = {
  count: {
    type: "NumberType",
  },
};

const data = makeBindingsForObject(schema);

const view1 = (
  <Action exp={e`${data.count} = ${data.count} + 1`}>
    <Action.Label>Count: {data.count}</Action.Label>
  </Action>
);

const flow: DSLFlow = {
  id: "action-basic",
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
