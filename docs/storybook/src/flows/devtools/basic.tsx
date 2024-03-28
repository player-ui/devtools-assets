import React from "react";
import type { DSLFlow, DSLSchema } from "@player-tools/dsl";
import { expression as e, makeBindingsForObject } from "@player-tools/dsl";
import {
  Action,
  Console,
  Navigation,
  ObjectInspector,
  StackedView,
  Table,
} from "@devtools-ui/plugin";
import type { Schema } from "@player-ui/types";

const RecordType: Schema.DataType<Record<string, unknown>> = {
  type: "RecordType",
};

const schema = {
  data: RecordType,
  flow: RecordType,
  expression: { type: "StringType" },
  history: [
    {
      id: { type: "StringType" },
      expression: { type: "StringType" },
      result: { type: "StringType" },
      severity: { type: "StringType" },
    },
  ] as [DSLSchema],
  logs: [
    {
      id: { type: "StringType" },
      time: { type: "StringType" },
      type: { type: "StringType" },
      message: { type: "StringType" },
      severity: { type: "StringType" },
      binding: { type: "StringType" },
      from: { type: "StringType" },
      to: { type: "StringType" },
      state: { type: "StringType" },
      error: { type: "StringType" },
      outcome: { type: "StringType" },
      metricType: { type: "StringType" },
    },
  ] as [DSLSchema],
};

const bindings = makeBindingsForObject(schema);

const Screen = ({
  main,
  footer,
  id,
}: {
  id: string;
  main: React.ReactNode;
  footer?: React.ReactNode;
}) => (
  <StackedView id={id}>
    <StackedView.Header>
      <Navigation>
        <Navigation.Values>
          <Action value="Events">
            <Action.Label>Events</Action.Label>
          </Action>
          <Action value="Flow">
            <Action.Label>Flow</Action.Label>
          </Action>
          <Action value="Data">
            <Action.Label>Data</Action.Label>
          </Action>
          <Action value="Console">
            <Action.Label>Console</Action.Label>
          </Action>
        </Navigation.Values>
      </Navigation>
    </StackedView.Header>
    <StackedView.Main>{main}</StackedView.Main>
    {footer && <StackedView.Footer>{footer}</StackedView.Footer>}
  </StackedView>
);

const EventsView = (
  <Screen id="events-view" main={<Table binding={bindings.logs} />} />
);

const FlowView = (
  <Screen
    id="flow-view"
    main={
      <ObjectInspector binding={bindings.flow}>
        <ObjectInspector.Label>Flow</ObjectInspector.Label>
      </ObjectInspector>
    }
    footer={
      <Action exp={e`publish('copy_flow_to_clipboard')`}>
        <Action.Label>Copy flow to the clipboard</Action.Label>
      </Action>
    }
  />
);

const DataView = (
  <Screen
    id="data-view"
    main={
      <ObjectInspector binding={bindings.data}>
        <ObjectInspector.Label>Data</ObjectInspector.Label>
      </ObjectInspector>
    }
  />
);

const ConsoleView = (
  <Screen
    id="console-view"
    main={
      <Console
        exp={e`publish('evaluate-expression', ${bindings.expression})`}
        binding={bindings.history}
      />
    }
  />
);

const flow: DSLFlow = {
  id: "devtools",
  views: [EventsView, FlowView, DataView, ConsoleView],
  data: {
    flow: {
      id: "action-basic",
      views: [{ asset: { id: "ref", type: "text", value: "content" } }],
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
            ref: "ref",
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
    },
    data: {
      count: 0,
      foo: {
        bar: {
          a: "a_content",
          b: "b_content",
        },
        fuzz: [1, 2, 3],
      },
    },
    expression: "",
    history: [
      { id: "0", expression: "1 + 1", result: "2" },
      { id: "1", expression: "1 / 0", result: "Infinity", severity: "error" },
      {
        id: "2",
        expression: "1 + a",
        result: "Expected a integer, got a string",
        severity: "warning",
      },
    ],
    logs: [
      {
        id: "0",
        time: "2021-08-04T00:00:00Z",
        type: "log",
        message: "Hello, world!",
        severity: "info",
      },
      {
        id: "1",
        time: "2021-08-04T00:00:01Z",
        type: "dataChange",
        binding: "foo.bar.a",
        from: "old",
        to: "new",
      },
      {
        id: "2",
        time: "2021-08-04T00:00:02Z",
        type: "metric",
        metricType: "performance",
        message: "Page load time",
      },
      {
        id: "3",
        time: "2021-08-04T00:00:03Z",
        type: "stateChange",
        state: "VIEW_1",
        outcome: "DONE",
        error: "Error message",
      },
    ],
  },
  schema,
  navigation: {
    BEGIN: "FLOW_1",
    FLOW_1: {
      startState: "Events",
      Events: {
        state_type: "VIEW",
        ref: EventsView,
        transitions: {
          Events: "Events",
          Flow: "Flow",
          Data: "Data",
          Console: "Console",
        },
      },
      Flow: {
        state_type: "VIEW",
        ref: FlowView,
        transitions: {
          Events: "Events",
          Flow: "Flow",
          Data: "Data",
          Console: "Console",
        },
      },
      Data: {
        state_type: "VIEW",
        ref: DataView,
        transitions: {
          Events: "Events",
          Flow: "Flow",
          Data: "Data",
          Console: "Console",
        },
      },
      Console: {
        state_type: "VIEW",
        ref: ConsoleView,
        transitions: {
          Events: "Events",
          Flow: "Flow",
          Data: "Data",
          Console: "Console",
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
