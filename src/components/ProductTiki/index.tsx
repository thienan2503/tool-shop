import {
  Button,
  Center,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { formatVND } from "~/helper";
import useProductSale from "~/hooks/useProductSale";
import UILoading from "../UILoading";
const ProductTiki = () => {
  const [page, setPage] = useState(1);
  const { products, getTopSale } = useProductSale();

  const renderTopSale = useCallback(() => {
    const dataRender = getTopSale();

    if (!dataRender) return;
    return dataRender
      .slice(page - 1, page + 9)
      .map((product: any, index: number) => (
        <Tr key={product.id}>
          <Td>{page + index}</Td>
          <Td>
            <Tooltip label={product.name}>
              <div
                style={{
                  maxWidth: "300px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {product.name}
              </div>
            </Tooltip>
          </Td>
          <Td>
            <Image
              src={product.thumbnail_url}
              w={"60px"}
              height={"60px"}
              alt="Dan Abramov"
            />
          </Td>
          <Td isNumeric>{formatVND(product.original_price)}</Td>
          <Td isNumeric>{formatVND(product.price)}</Td>
          <Td isNumeric>{formatVND(product.price_sale)}</Td>
        </Tr>
      ));
  }, [products, page]);
  return (
    <>
      <Center>
        <Button
          onClick={() => {
            if (page <= 1) return;
            setPage(page - 9);
          }}
          disabled={page === 1}
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            setPage(page + 10);
          }}
          disabled={page === 10}
        >
          Next
        </Button>
      </Center>
      <TableContainer maxWidth={"100vw"} mb={10}>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>STT</Th>
              <Th>Tên</Th>
              <Th>Hình ảnh</Th>
              <Th isNumeric>Giá gốc</Th>
              <Th isNumeric>Giảm còn</Th>
              <Th isNumeric>Giảm được</Th>
            </Tr>
          </Thead>
          {products.length > 0 ? (
            <Tbody>{renderTopSale()}</Tbody>
          ) : (
            <UILoading />
          )}
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductTiki;
