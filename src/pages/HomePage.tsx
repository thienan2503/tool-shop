import { createTheme, ThemeProvider } from "@mui/material/styles";
import FootballTactics from "~/components/FootballTactics";

const HomePage = () => {
  const theme = createTheme({
    palette: {
      mode: "light", // hoặc "dark"
    },
  });
  return (
    <div>
      <h1>Home Page</h1>
      <ThemeProvider theme={theme}>
        <FootballTactics />
      </ThemeProvider>
      ;
    </div>
  );
};

export default HomePage;
