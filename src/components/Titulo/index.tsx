import { Titulos } from "./styled"

type Props = {
    children: string
}
export const Titulo = (props: Props) => (
    <Titulos>{props.children}</Titulos>
)   