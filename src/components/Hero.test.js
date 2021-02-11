import React from "react";
import { render } from "test-utils";

import Hero from "./Hero";

test("renders Hero with children", () => {
  const { getByText } = render(
    <Hero>
      <p>Lucas Carlos</p>
    </Hero>
  );

  expect(getByText("Lucas Carlos")).toBeInTheDocument();
});

test("renders image background", () => {
  const image =
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  const { getByTestId } = render(<Hero image={image} />);

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});
