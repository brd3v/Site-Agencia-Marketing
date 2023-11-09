import { Img } from "./styled";

type Props ={
    src : string
}
const Logo = (props: Props) => (
    <><Img src={props.src}/> </>
    
)

export default Logo