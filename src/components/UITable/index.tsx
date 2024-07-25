import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import UILoading from "../UILoading";

const UITable = ({ isLoading, dataTable }: any) => {
  return (
    <TableContainer w={"100%"} mb={10}>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            {dataTable.th.map((item: any, index: number) => (
              <Th key={index} {...item.atr}>
                {item.title}
              </Th>
            ))}
          </Tr>
        </Thead>
        {isLoading ? <UILoading /> : <Tbody>{dataTable.tb}</Tbody>}
      </Table>
    </TableContainer>
  );
};

export default UITable;
