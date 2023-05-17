import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/themes";
import Workspace from "./Workspace";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Workspace />
    </ThemeProvider>
  );
};

export default App;
