import React from "react";
import { Cards } from "../Cards";
import { Formulario } from "../Formulario";
import { Hero,SectioInicio } from "./styled";

export const Inicio = () => (
    <>
      <SectioInicio>

        <Formulario></Formulario>
        <Hero><img className="img" src="https://www.pngplay.com/wp-content/uploads/1/Men-In-Suit-PNG.png" alt="" /></Hero>

    </SectioInicio>

    <Cards />
    </>

)
