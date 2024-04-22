import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import type { TransformedTable } from "../types";

/**
 * Hook to convert the data we get from the Player Content into the properties our component expects:
 */
const useTablePros = (props: TransformedTable) => {
  // Translate the properties we get from the Player Content (DSL > JSON > transformer)
  // into what the elements that compose your component expect (platform-specific, for
  // platform-agnostic transformations, see the transformer):

  const { rows } = props;

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
  const headers = Array.from(new Set(rows.flatMap((row) => Object.keys(row))));

  return {
    ...props,
    headers,
    rows: parsedRows,
  } as const;
};

export const TableComponent = (props: TransformedTable) => {
  const { headers, rows } = useTablePros(props);

  if (!rows.length) {
    return null;
  }

  return (
    <TableContainer overflow={"auto"}>
      <Table variant="simple">
        <Thead>
          <Tr>
            {headers.map((key) => (
              <Th key={key}>{key}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, index) => (
            <Tr key={index}>
              {headers.map((key) => (
                <Td key={key}>{row[key] ?? ""}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
