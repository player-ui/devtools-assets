import React from "react";
import { Text } from "@devtools-ui/plugin";
import type { DSLFlow } from "@player-tools/dsl";

const view1 = <Text>Text</Text>;

const flow: DSLFlow = {
  id: "text-basic",
  views: [view1],
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
