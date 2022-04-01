import { Container } from "@mui/material";
import { Formik } from "formik";
import { Form } from "./Form";
import ItemTable from "./ItemTable";
import { ThemeProvider } from "@mui/system";
import { theme } from "../styles/theme";

function App() {
  return (
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
        <Formik
          initialValues={{ distance: "", season: "spring", capacity: 15 }}
          onSubmit={() => {}}
        >
          <>
            <Form />
            <ItemTable />
          </>
        </Formik>
      </Container>
    </ThemeProvider>
  );
}

export default App;
