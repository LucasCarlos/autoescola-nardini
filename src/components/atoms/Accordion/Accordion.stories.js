import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
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
  </>
);

export const withGroup = () => (
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
      Lorem ipsum dolor sit amet consectePtur adipisicing elit. Aut impedit
      eligendi facere eos aperiam ut odio saepe porro soluta quia blanditiis
      rerum autem quibusdam magni, doloribus illum. Cum, reprehenderit iure.
    </Accordion>
  </AccordionGroup>
);
