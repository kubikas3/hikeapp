import { render, screen } from "@testing-library/react";
import { Formik } from "formik";
import { HikeInfo } from "../types";
import { Items } from "./Items";

test("on too much weight, alert should be rendered", () => {
  const initialValues: HikeInfo = {
    capacity: 15,
    distance: 1000,
    season: "spring",
  };

  render(
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Items />
    </Formik>
  );

  expect(
    screen.getByText(
      /total weight exceeds backpack capacity — get a larger backpack or reduce distance/i
    )
  ).toBeInTheDocument();
});

test("on positive distance, items to be rendered", () => {
  const initialValues: HikeInfo = {
    capacity: 15,
    distance: 10,
    season: "spring",
  };

  render(
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Items />
    </Formik>
  );

  expect(screen.getAllByRole("row").length).toBeGreaterThan(0);
});

test("on negative distance, no items to be rendered", () => {
  const initialValues: HikeInfo = {
    capacity: 15,
    distance: -1,
    season: "spring",
  };

  render(
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Items />
    </Formik>
  );

  expect(screen.getAllByRole("row")).toHaveLength(2);
});

test("on summer, cap to be rendered", () => {
  const initialValues: HikeInfo = {
    capacity: 15,
    distance: 10,
    season: "summer",
  };

  render(
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Items />
    </Formik>
  );

  const capRow = screen
    .getAllByRole("row")
    .find((r) => r.textContent?.startsWith("Cap"));

  expect(capRow).toBeInTheDocument();
});
