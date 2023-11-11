import { TexArea } from "./styled";
type Props = {
    onChange : () => void

}
export const Text = (props: Props) => (
    <TexArea onChange={props.onChange} />
)