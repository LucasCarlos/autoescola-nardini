import React from "react";
import { render } from "test-utils";

import Feature from "./Feature";

test("render the title", () => {
  const { getByText } = render(<Feature title="My title" />);

  expect(getByText("My title")).toBeInTheDocument();
});

test("render the children", () => {
  const { getByText } = render(<Feature>My children</Feature>);

  expect(getByText("My children")).toBeInTheDocument();
});
