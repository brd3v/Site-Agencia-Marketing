import { Inputs } from "./styled";
type Props = {
    placeholder:string
    onChange : () => string
}
export const Input = (props: Props) => (
              <Inputs onChange={props.onChange} placeholder={props.placeholder} />
        )