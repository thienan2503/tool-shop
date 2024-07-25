import {
  Button,
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { routers } from "~/routes";

function DrawerLayout() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button w={"max-content"} colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader textAlign={"center"} borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            {routers.map(
              (route: any, index: number) =>
                route.title && (
                  <ChakraLink
                    key={index}
                    as={ReactRouterLink}
                    variant={"button"}
                    to={route.link}
                    display={"flex"}
                    justifyContent={"center"}
                    mb={"10px"}
                    py={"5px"}
                  >
                    {route.title}
                  </ChakraLink>
                )
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerLayout;
