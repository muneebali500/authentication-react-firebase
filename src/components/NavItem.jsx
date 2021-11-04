import { useState, useEffect } from "react";

import styled from "styled-components";
import { largeScreen } from "../responsive";

import { ArrowDropDown } from "@material-ui/icons";

export default function NavItem({ title, value, dropDown }) {
  const [isNavDropDown, setIsNavDropDown] = useState(false);

  useEffect(() => {
    console.log(`useeffect called`);
    const windowWidth =
      window.innerWidth > 1024
        ? setIsNavDropDown(true)
        : setIsNavDropDown(false);

    return windowWidth;
  }, []);

  return (
    <Container>
      <NavItemName>
        <span title={title}>{title}</span>
        <button
          onClick={(e) => {
            setIsNavDropDown(!isNavDropDown);
          }}
          style={{
            transform: isNavDropDown ? "rotate(-180deg)" : "rotate(0deg)",
          }}
          value={value}
        >
          {title === `Pricing` ? (
            ``
          ) : (
            <ArrowDropDown className="icon" value={value} />
          )}
        </button>
      </NavItemName>

      {isNavDropDown && (
        <DropDownWrapper title={title}>
          {dropDown.map((item) => {
            const { id, title, icon, narration } = item;

            return (
              <NavItemDropDown key={id}>
                {icon}

                <div>
                  <h4>{title}</h4>
                  <p>{narration}</p>
                </div>
              </NavItemDropDown>
            );
          })}
        </DropDownWrapper>
      )}
    </Container>
  );
}

const Container = styled.ul`
  list-style-type: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  ${largeScreen({ borderBottom: `none` })}
`;

const NavItemName = styled.li`
  /* border: 1px solid; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3%;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    width: 0%;
    background-color: blue;
    transition: 0.3s ease;
  }

  ${largeScreen({ padding: `1rem`, cursor: `pointer` })}

  &:hover::after {
    ${largeScreen({
      width: `60%`,
    })}
  }

  &:hover + ul {
    ${largeScreen({
      display: `block`,
    })}
  }

  span {
    font-size: 2.5rem;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.9);

    ${largeScreen({ fontSize: `1.5rem` })}
  }

  button {
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
    margin-right: 0.7rem;
    transition: 0.3s ease;

    ${largeScreen({ display: `none`, marginRight: `0` })}

    .icon {
      font-size: 3rem;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const DropDownWrapper = styled.ul`
  padding: 1rem 3%;

  ${largeScreen({
    position: `absolute`,
    left: `-2rem`,
    backgroundColor: `#fff`,
    width: `55rem`,
    display: `none`,
    boxShadow: `1px 1px 0 rgba(0,0,0,0.2), -1px -1px 0 #6d3e3e33`,
    borderRadius: `3px`,
  })}

  @media (min-width: 64em) {
    padding: ${({ title }) => (title === "Pricing" ? `0` : `2rem`)};
  }
`;

const NavItemDropDown = styled.li`
  display: flex;
  padding: 1rem 0;

  .icon {
    margin-right: 1rem;
    font-size: 2.5rem;
    color: rgba(0, 0, 0, 0.7);
  }

  h4 {
    font-size: 1.6rem;
    color: rgba(0, 0, 0, 0.8);
  }

  p {
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.7);
  }
`;
