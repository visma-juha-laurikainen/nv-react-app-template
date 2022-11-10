import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";
import { t } from "./testUtils";

it("renders app", () => {
  render(<App />);

  expect(screen.getByText(`App ${t("Test")}`));
});
