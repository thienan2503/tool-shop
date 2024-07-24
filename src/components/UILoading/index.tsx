import { Flex, Spinner } from "@chakra-ui/react";

const UILoading = () => {
  return (
    <Flex w={"100%"} justifyContent={"center"}>
      <Spinner />
    </Flex>
  );
};
export default UILoading;
