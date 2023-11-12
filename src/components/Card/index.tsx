import { ReactElement } from "react"
import { CardItem } from "./styled"
type Props = {
    children : ReactElement
}
const Card = (props:Props) => (
    <>
     <CardItem>{props.children}</CardItem>
    </>
)

export default Card
