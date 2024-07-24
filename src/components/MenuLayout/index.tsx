import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routers } from "~/routes";

interface MenuLayoutProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuLayout = ({ isOpen, onClose }: MenuLayoutProps) => {
  return (
    <Box
      position={"relative"}
      width={`${isOpen ? "260px" : "0"}`}
      transition={"width 0.5s"}
    >
      <Flex
        position={"fixed"}
        top={"0"}
        left={`${isOpen ? "0px" : "-260px"}`}
        bottom={"0"}
        w={"260px"}
        flexDirection={"column"}
        transition={"left 0.5s"}
      >
        {routers.map((route: any, index: number) => (
          <Button key={index} mb={"10px"}>
            <Link to={route.link}>{route.title}</Link>
          </Button>
        ))}

        <Button
          position={"absolute"}
          top={"0"}
          right={"-20px"}
          transform={"translateX(50%)"}
          w={"20px"}
          padding={"0px 2px"}
          bgColor={"gray"}
          borderRadius={"0px 10px 10px 0px"}
          cursor={"pointer"}
          onClick={onClose}
        >
          {isOpen ? "C" : "O"}
        </Button>
      </Flex>
    </Box>
  );
};

export default MenuLayout;
