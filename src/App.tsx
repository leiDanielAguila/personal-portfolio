import "@mantine/core/styles.css";
import LandingPage from "./pages/LandingPage";

import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <LandingPage />
    </MantineProvider>
  );
}

export default App;
