import { Box, Flex } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import MenuLayout from "~/components/MenuLayout";

interface DefaultLayoutProps {
  children: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  const [isOpen, setIsOpen] = useState(true);
  const handleCloseMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Flex gap={"46px"}>
      <MenuLayout isOpen={isOpen} onClose={handleCloseMenu} />
      <Box mt={"60px"} flex={1} transition={"width 0.5s"}>
        {children}
      </Box>
    </Flex>
  );
}

export default DefaultLayout;
