import { Botao } from "../../components/Botao";
import { Input } from "../../components/Input";
import { Formularios } from "./styled";
import {Text} from '../../components/Text'

export const Formulario = () => (
  <Formularios>

   <Input placeholder='Seu Nome...'></Input>
    <Input placeholder="Seu Whatasapp..."></Input>
    <Input placeholder="Seu melhor Email"></Input>
    <Text />
    <Botao></Botao>
    </Formularios> 
)