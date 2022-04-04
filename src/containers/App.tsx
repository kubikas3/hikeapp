import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { Formik } from "formik";
import { theme } from "../styles/theme";
import { HikeInfo } from "../types";
import { Form } from "./Form";
import { ItemTable } from "./ItemTable";

const initialValues: HikeInfo = {
  distance: null,
  capacity: 15,
  season: "spring",
};

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
        <Formik initialValues={initialValues} onSubmit={() => {}}>
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
