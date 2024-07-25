import { ThemeOverride, extendTheme } from "@chakra-ui/react";
import LinkTheme from "./LinkTheme";

const theme: ThemeOverride = extendTheme({
  components: {
    Link: LinkTheme,
  },
});

export default theme;
