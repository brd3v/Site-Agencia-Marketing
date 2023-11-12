import { Inputs } from "./styled";
type Props = {
    placeholder:string
    onChange : () => string | any
    type ? : string
    value : string
    maxLength? : number | string
}
export const Input = (props: Props) => (
              <Inputs max={props.maxLength} type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />

        )
