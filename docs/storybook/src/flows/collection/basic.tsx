import React from "react";
import { Collection, Text } from "@devtools-ui/plugin";
import type { DSLFlow } from "@player-tools/dsl";

const view1 = (
  <Collection>
    <Collection.Values>
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </Collection.Values>
  </Collection>
);

const flow: DSLFlow = {
  id: "collection-basic",
  views: [view1],
  data: {
    count: 0,
  },
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
