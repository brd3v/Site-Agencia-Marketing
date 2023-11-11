import { TexArea } from "./styled";
type Props = {
    onChange : () => void
    value : string

}
export const Text = (props: Props) => (
    <TexArea  value={props.value} onChange={props.onChange} />
)