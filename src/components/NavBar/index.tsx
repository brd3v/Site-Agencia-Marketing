import { NavItem } from "./styled";
type Props = {
    children: string
    href : string
}
export const NavBar = (props: Props) => (
    <>
    <NavItem href={props.href}>{props.children}</NavItem>
    </>
)

