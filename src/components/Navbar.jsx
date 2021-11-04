import styled from "styled-components";
import { largeScreen } from "../responsive";

import { NavItems } from "../data";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <Nav>
      {NavItems.map((navItem) => {
        return <NavItem {...navItem} key={navItem.id} />;
      })}
    </Nav>
  );
}

const Nav = styled.nav`
  /* border: 1px solid; */
  ${largeScreen({
    display: `flex`,
    alignItems: `center`,
  })}
`;
