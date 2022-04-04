import { render, screen } from "@testing-library/react";
import { Formik } from "formik";
import { HikeInfo } from "../types";
import { Form } from "./Form";

const initialValues: HikeInfo = {
  capacity: 15,
  distance: 100,
  season: "fall",
};

test("distance input to be rendered", () => {
  render(
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form />
    </Formik>
  );

  expect(screen.getByLabelText("Distance")).toBeInTheDocument();
});

test("season input to be rendered", () => {
  render(
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form />
    </Formik>
  );

  expect(screen.getByLabelText("Season")).toBeInTheDocument();
});

test("backpack capacity input to be rendered", () => {
  render(
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form />
    </Formik>
  );

  expect(screen.getByLabelText("Backpack Capacity")).toBeInTheDocument();
});
