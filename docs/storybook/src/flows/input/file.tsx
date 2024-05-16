import React from "react";
import { Input } from "@devtools-ui/plugin";
import { DSLFlow, makeBindingsForObject } from "@player-tools/dsl";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const schema: any = {
  fileContent: {
    type: "StringType",
  },
};

const bindings = makeBindingsForObject(schema);

const view1 = <Input binding={bindings.fileContent} file={true} />;

const flow: DSLFlow = {
  id: "input-file",
  views: [view1],
  data: {
    fileContent: "",
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
