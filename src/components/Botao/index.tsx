import { Btn } from "./styled";
import { TbArrowBigRightLine } from "react-icons/tb";
type Props = {
    onClick : () => void
}

export const Botao = (porps:Props) =>  (
    <Btn onClick={porps.onClick}>Orçamento <TbArrowBigRightLine /> </Btn>
)