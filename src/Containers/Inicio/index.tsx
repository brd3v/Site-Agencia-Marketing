import { Formulario } from "../Formulario";
import { Hero, SectioInicio } from "./styled";

export const Inicio = () =>(
    <SectioInicio>
    <Formulario></Formulario>
    <Hero><img className="img" src="/logo/woman.png" alt="" /></Hero>
    </SectioInicio>
)