import { Paragrafos } from "./style";
type Props = {
    children: string
}
export const Paragrafo = (props: Props) => (
    <Paragrafos>{props.children}</Paragrafos>
)