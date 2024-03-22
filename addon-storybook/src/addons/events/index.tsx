import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Placeholder } from "@storybook/components";
import type { EventType } from "../../state";
import type { StateType } from "../../redux";
import { useContentKind } from "../../redux";

interface EventsPanelProps {
  /** if the panel is shown */
  active: boolean;
}

const prettifyEventPayload = (evt: EventType) => {
  switch (evt.type) {
    case "log":
      return JSON.stringify({ message: evt.message, severity: evt.severity });
    case "dataChange":
      return JSON.stringify({
        binding: evt.binding,
        from: evt.from,
        to: evt.to,
      });
    case "metric":
      return JSON.stringify({
        metricType: evt.metricType,
        message: evt.message,
      });
    case "stateChange":
      return JSON.stringify({
        state: evt.state,
        error: evt.error,
        outcome: evt.outcome,
      });
  }
};

/** The panel to show events */
export const EventsPanel = (props: EventsPanelProps) => {
  const events = useSelector<StateType, EventType[]>((state) => state.events);
  const contentType = useContentKind();

  if (!props.active) {
    return null;
  }

  if (contentType === undefined) {
    return (
      <Placeholder>
        This story is not configured to receive Player events.
      </Placeholder>
    );
  }

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Events</TableCaption>
        <Thead>
          <Tr>
            <Th>Time</Th>
            <Th>Type</Th>
            <Th>Payload</Th>
          </Tr>
        </Thead>
        <Tbody>
          {events.map((evt) => (
            <Tr key={evt.id}>
              <Td>{evt.time}</Td>
              <Td>{evt.type}</Td>
              <Td>{prettifyEventPayload(evt)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
