import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
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

const useTablePros = () => {
  const rows = useSelector<StateType, EventType[]>((state) => state.events);

  const parsedRows = rows.map((row) =>
    Object.entries(row).reduce((acc, [key, value]) => {
      if (key === "time") {
        return {
          ...acc,
          [key]: new Date(value).toLocaleString(),
        };
      }

      if (value === null || value === undefined) {
        return {
          ...acc,
          [key]: "",
        };
      }

      if (typeof value === "object") {
        return {
          ...acc,
          [key]: JSON.stringify(value),
        };
      }

      return { ...acc, [key]: value };
    }, {} as Record<string, string>)
  );

  // Get the keys to use as column headers (checking all the rows for cases where we have different keys):
  const headers = rows?.length
    ? Array.from(new Set(rows.flatMap((row) => Object.keys(row))))
    : undefined;

  return {
    headers,
    rows: parsedRows,
  } as const;
};

/** The panel to show events */
export const EventsPanel = (props: EventsPanelProps) => {
  const { headers, rows } = useTablePros();
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

  if (!rows.length) {
    return (
      <Placeholder>
        No events have been recorded for this story yet.
      </Placeholder>
    );
  }

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {headers?.map((key) => (
              <Th key={key}>{key}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, index) => (
            <Tr key={index}>
              {headers?.map((key) => (
                <Td key={key}>{row[key as keyof typeof row] ?? ""}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
