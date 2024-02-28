import React from "react";

import { useReactPlayer, ReactPlayerPlugin } from "@player-ui/react";
import { ReferenceAssetsPlugin } from "@player-ui/reference-assets-plugin-react";
import { Flow } from "@player-ui/types";
import { DevToolsAssetsPlugin } from "./plugin";
import "./App.css";

export const SimpleFlow: Flow = {
  id: "hello-world",
  views: [
    {
      id: "view-1",
      type: "collection",
      values: [
        {
          asset: {
            id: "name-input",
            type: "objectInspector",
            label: {
              asset: {
                id: "name-input-label",
                type: "text",
                value: "hello world",
              },
            },
            data: {
              foo: "bar",
            },
          },
        },
        {
          asset: {
            id: "action",
            type: "action",
            exp: "{{count}} = {{count}} + 1",
            label: {
              asset: {
                id: "action-label-text",
                type: "text",
                value: "Clicked {{count}} times",
              },
            },
          },
        },
      ],
    },
  ],
  data: {
    hello: {
      world: "foo",
    },
    count: 0,
  },
  navigation: {
    BEGIN: "FLOW_1",
    FLOW_1: {
      startState: "VIEW_1",
      VIEW_1: {
        state_type: "VIEW",
        ref: "view-1",
        transitions: {
          Next: "VIEW_2",
        },
      },
      VIEW_2: {
        state_type: "VIEW",
        ref: "view-2",
        transitions: {
          Back: "VIEW_1",
        },
      },
      END_Done: {
        state_type: "END",
        outcome: "{{person.name}}",
      },
    },
  },
};
const plugins: Array<ReactPlayerPlugin> = [
  new DevToolsAssetsPlugin(),
  new ReferenceAssetsPlugin(),
];

const Fallback = () => <div id="loader">Loading...</div>;

export const App = () => {
  // Create Player with our plugins
  const { reactPlayer } = useReactPlayer({ plugins });

  // Start the flow.

  React.useEffect(() => {
    reactPlayer.start(SimpleFlow);
  }, []);

  // Render Player
  return (
    <React.Suspense fallback={<Fallback />}>
      <reactPlayer.Component />
    </React.Suspense>
  );
};

export default App;
