import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import BgHighwayImage from "../stories/assets/bg-highway.jpg";
import BgCardImage from "../stories/assets/bg-car.jpg";
import Heading from "./Heading";
import Button from "./Button";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgHighwayImage}>
    <h1>{text("title", "Ganhe sua liberdade para ir e vir")}</h1>
    <p>{text("text", "A auto escola lider em aprovação")}</p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgCardImage}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong>
        <br />
        para ir e vir
      </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
    </ul>
    <Button color="primary" variant="outlined">
      Matricule-se agora
    </Button>
  </Hero>
);
