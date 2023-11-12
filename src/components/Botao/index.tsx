import { Btn } from "./styled";
import { TbArrowBigRightLine } from "react-icons/tb";
type Props = {
    onClick : () => void
    children? : string | any
}

export const Botao = (props:Props) =>  (
    <Btn onClick={props.onClick}>{props.children} <TbArrowBigRightLine />  </Btn>
)
