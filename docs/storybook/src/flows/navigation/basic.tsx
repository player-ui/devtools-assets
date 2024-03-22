import React from "react";
import { Action, Navigation, Collection, Text } from "@devtools-ui/plugin";
import type { DSLFlow } from "@player-tools/dsl";

const Nav = () => (
  <Navigation id="transition-1">
    <Navigation.Values>
      <Action value="View1">
        <Action.Label>View1</Action.Label>
      </Action>
      <Action value="View2">
        <Action.Label>View2</Action.Label>
      </Action>
      <Action value="View3">
        <Action.Label>View3</Action.Label>
      </Action>
    </Navigation.Values>
  </Navigation>
);

const view1 = (
  <Collection>
    <Collection.Values>
      <Nav />
      <Text>View 1</Text>
    </Collection.Values>
  </Collection>
);

const view2 = (
  <Collection>
    <Collection.Values>
      <Nav />
      <Text>View 2</Text>
    </Collection.Values>
  </Collection>
);

const view3 = (
  <Collection>
    <Collection.Values>
      <Nav />
      <Text>View 3</Text>
    </Collection.Values>
  </Collection>
);

const transitions = {
  View1: "VIEW_1",
  View2: "VIEW_2",
  View3: "VIEW_3",
};

const flow: DSLFlow = {
  id: "navigation-basic",
  views: [view1, view2, view3],
  navigation: {
    BEGIN: "FLOW_1",
    FLOW_1: {
      startState: "VIEW_1",
      VIEW_1: {
        state_type: "VIEW",
        ref: view1,
        transitions,
      },
      VIEW_2: {
        state_type: "VIEW",
        ref: view2,
        transitions,
      },
      VIEW_3: {
        state_type: "VIEW",
        ref: view3,
        transitions,
      },

      END_Done: {
        state_type: "END",
        outcome: "DONE",
      },
    },
  },
};

export default flow;
