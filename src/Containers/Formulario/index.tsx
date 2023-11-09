import { Botao } from "../../components/Botao";
import { Input } from "../../components/Input";
import { Formularios } from "./styled";

export const Formulario = () => (
  <Formularios>

   <Input placeholder='Seu Nome...'></Input>
    <Input placeholder="Seu Whatasapp..."></Input>
    <Input placeholder="Seu melhor Email"></Input>
    <Input placeholder="sua menssagem"></Input>
    <Botao></Botao>
    </Formularios> 
)