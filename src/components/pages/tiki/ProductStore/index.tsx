import { Button, Flex, Image, Td, Text, Tooltip, Tr } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import UITable from "~/components/UITable";
import { formatVND } from "~/helper";
import useApi from "~/hooks/useApi";

const FIRST_PAGE = 1;

const ProductRow = ({ product, index }: any) => (
  <Tr
    key={product.id}
    onClick={() => window.open(`https://tiki.vn/${product.url_path}`, "_blank")}
    cursor={"pointer"}
  >
    <Td>{index + 1}</Td>
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
    <Td isNumeric>{formatVND(product.original_price - product.price)}</Td>
  </Tr>
);

const ProductTiki = () => {
  const [page, setPage] = useState(1);
  const { productStore } = useApi();
  const { data: dataProduct, isLoading } = productStore({
    cursor: page === 0 ? 0 : page * 10,
    limit: 20,
  });

  const renderTopSale = useMemo(() => {
    if(!dataProduct?.data) return [];
    return dataProduct?.data
      .sort(
        (a: any, b: any) =>
          b.original_price - b.price - (a.original_price - a.price)
      )
      .map((product: any, index: number) => (
        <ProductRow product={product} index={index} />
      ));
  }, [dataProduct?.data, page]);

  return (
    <>
      <Flex gap="15px" justifyContent={"center"} alignItems={"center"}>
        <Button
          onClick={() => {
            if (page <= 1) return;
            setPage(page - 1);
          }}
        >
          Prev
        </Button>
        <Text>{page === 0 ? FIRST_PAGE : page}</Text>
        <Button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </Button>
      </Flex>
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
