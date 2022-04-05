import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { theme } from "../styles/theme";
import { Form } from "./Form";
import { Items } from "./Items";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            padding: "16px",
          }}
        >
          <Form />
          <Items />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
