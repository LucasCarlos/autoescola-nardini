import React from "react";
// import PropTypes from "prop-types";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";

import HeroImage from "assets/hero.jpg";
import ServImage01 from "assets/serv-01.jpg";
import ServImage02 from "assets/serv-02.jpg";
import ServImage03 from "assets/serv-03.jpg";
import ServImage04 from "assets/serv-04.jpg";
import ServImage05 from "assets/serv-05.jpg";
import AboutVideo from "assets/about.mp4";

const products = [
  {
    id: 1,
    image: ServImage01,
    title: "1³ Habilitação Carro e Moto",
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentiumipsa officiis natus.",
  },
  {
    id: 1,
    image: ServImage02,
    title: "1³ Habilitação Carro",
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentiumipsa officiis natus.",
  },
  {
    id: 1,
    image: ServImage03,
    title: "1³ Habilitação Moto",
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentiumipsa officiis natus.",
  },
  {
    id: 1,
    image: ServImage04,
    title: "Mudança de Categoria Caminhão",
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentiumipsa officiis natus.",
  },
  {
    id: 1,
    image: ServImage05,
    title: "Aulas Avulsas",
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentiumipsa officiis natus.",
  },
];

const Home = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong>
          <br />
          para ir e vir
        </h1>
      </Heading>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
      <Button color="primary" variant="outlined">
        Matricule-se agora
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e mehlor frota">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="Hanilitação mais rápida">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente localizção">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Nardini Auto Escola</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            quas error sed voluptas repellendus praesentium ullam laborum,
            asperiores quae iste quasi ea vel necessitatibus omnis sunt facilis,
            ratione nihil eos.
          </p>
          <div>
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay loop muted />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrents</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Como eu renovo minha CNH?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut impedit
          eligendi facere eos aperiam ut odio saepe porro soluta quia blanditiis
          rerum autem quibusdam magni, doloribus illum. Cum, reprehenderit iure.
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut impedit
          eligendi facere eos aperiam ut odio saepe porro soluta quia blanditiis
          rerum autem quibusdam magni, doloribus illum. Cum, reprehenderit iure.
        </Accordion>
        <Accordion title="Fui multado, e agora?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut impedit
          eligendi facere eos aperiam ut odio saepe porro soluta quia blanditiis
          rerum autem quibusdam magni, doloribus illum. Cum, reprehenderit iure.
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
