import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import DrawerLayout from "~/components/DrawerLayout";

interface DefaultLayoutProps {
  children: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  const [isOpen, setIsOpen] = useState(true);
  const handleCloseMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Use Chakra UI's useBreakpointValue hook to change the gap based on the current breakpoint
  const gap = useBreakpointValue({ base: "20px", md: "46px" });

  return (
    <Flex flexDirection={"column"} gap={gap}>
      <DrawerLayout />
      <Box px="15px">{children}</Box>
    </Flex>
  );
}

export default DefaultLayout;
