import React from "react";
import { Action, Collection } from "@devtools-ui/plugin";
import type { DSLFlow } from "@player-tools/dsl";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const schema: any = {
  count: {
    type: "NumberType",
  },
};

const transition1 = (
  <Collection id="transition-1">
    <Collection.Values>
      <Action value="Prev">
        <Action.Label>Back</Action.Label>
      </Action>
      <Action value="Next">
        <Action.Label>Next</Action.Label>
      </Action>
    </Collection.Values>
  </Collection>
);

const transition2 = (
  <Collection id="transition-2">
    <Collection.Values>
      <Action value="Prev">
        <Action.Label>Back</Action.Label>
      </Action>
      <Action value="Next">
        <Action.Label>End</Action.Label>
      </Action>
    </Collection.Values>
  </Collection>
);

const flow: DSLFlow = {
  id: "action-transitions",
  views: [transition1, transition2],
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
        ref: "transition-1",
        transitions: {
          Next: "VIEW_2",
          Prev: "END",
        },
      },
      VIEW_2: {
        state_type: "VIEW",
        ref: "transition-2",
        transitions: {
          Next: "END",
          Prev: "VIEW_1",
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
