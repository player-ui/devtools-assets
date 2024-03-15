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
import { TableType } from "../types";

export const TableComponent = (props: TableType) => {
  const { data, metaData } = props;
  const { caption, variant, headers } = { ...metaData };
  const columns = headers ? headers : Object.keys(data[0]);
  return (
    <div className="table">
      <TableContainer>
        <Table variant={variant}>
          {caption ?? <TableCaption>{caption}</TableCaption>}
          <Thead>
            <Tr>
              {columns.map((column) => (
                <Th key={column}>{column}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            (
            {props.data?.map((item, index) => (
              <Tr key={index}>
                {columns.map((item) => (
                  <Td key={index}>{item}</Td>
                ))}
              </Tr>
            ))}
            )
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
