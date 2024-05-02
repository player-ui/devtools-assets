import React from "react";
import { RadioGroup, Text } from "@devtools-ui/plugin";
import { makeBindingsForObject, DSLFlow } from "@player-tools/dsl";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const schema: any = {
  label: {
    type: "StringType",
  },
  value: {
    type: "StringType",
  },
};

const data = makeBindingsForObject(schema);

const view1 = (
  <RadioGroup binding={data.value}>
    <RadioGroup.Label>{data.label}</RadioGroup.Label>
    <RadioGroup.Values>
      <Text>
        <property name="value">Option 1</property>
        <property name="radio">opt1</property>
      </Text>
      <Text>
        <property name="value">Option 2</property>
        <property name="radio">opt2</property>
      </Text>
    </RadioGroup.Values>
  </RadioGroup>
);

const flow: DSLFlow = {
  id: "radio-group-basic",
  views: [view1],
  data: {
    value: "opt1",
    label: "Radio Group Test",
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
