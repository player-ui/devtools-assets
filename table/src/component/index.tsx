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

  // Get the keys to use as column headers (checking all the rows for cases where we have different keys):
  const headers = Array.from(new Set(rows.flatMap((row) => Object.keys(row))));

  return {
    ...props,
    headers,
    rows,
  } as const;
};

export const TableComponent = (props: TransformedTable) => {
  const { headers, rows } = useTablePros(props);

  if (!rows.length) {
    return null;
  }

  return (
    <TableContainer>
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
