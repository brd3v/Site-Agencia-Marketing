import { Inputs } from "./styled";
type Props = {
    placeholder:string
}
export const Input = (props: Props) => (
              <Inputs placeholder={props.placeholder} />
        )