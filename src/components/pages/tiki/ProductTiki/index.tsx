import { Button, Center, Image, Td, Tooltip, Tr } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import UITable from "~/components/UITable";
import { formatVND } from "~/helper";
import useProductSale from "~/hooks/useProductSale";
const ProductTiki = () => {
  const [page, setPage] = useState(1);
  const { isLoading, products, getTopSale } = useProductSale();

  const renderTopSale = useMemo(() => {
    const dataRender = getTopSale();

    if (!dataRender) return;
    return dataRender
      .slice(page - 1, page + 9)
      .map((product: any, index: number) => (
        <Tr key={product.id}>
          <Td>{page + index}</Td>
          <Td>
            <Tooltip placement="top" label={product.name}>
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
      <UITable
        isLoading={isLoading}
        dataTable={{
          th: [
            { title: "STT", atr: {} },
            { title: "Tên", atr: {} },
            { title: "Hình ảnh", atr: {} },
            { title: "Giá gốc", atr: { isNumeric: true } },
            { title: "Giảm còn", atr: { isNumeric: true } },
            { title: "Số tiền giảm", atr: { isNumeric: true } },
          ],
          tb: renderTopSale,
        }}
      />
    </>
  );
};

export default ProductTiki;
