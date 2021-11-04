import { useGlobalContext } from "../store/GlobalContext";
import Navbar from "./Navbar";

import { Close } from "@material-ui/icons";

import styled from "styled-components";
import { largeScreen, extraLargeScreen } from "../responsive";

export default function Header() {
  const { setIsNavBarOpen, isNavBarOpen } = useGlobalContext();

  return (
    <>
      {isNavBarOpen && (
        <Container>
          <h2 className="logo">bitly</h2>
          <CloseButton onClick={() => setIsNavBarOpen(false)}>
            <Close className="icon" />
          </CloseButton>

          <ContainerBody>
            <Navbar className="navbar" />
            <AuthButtonWrapper>
              <button>Login</button>
              <button>Sign Up</button>
              <button>Get a Quote</button>
            </AuthButtonWrapper>
          </ContainerBody>
        </Container>
      )}
    </>
  );
}

const Container = styled.header`
  /* border: 1px solid; */
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  background-color: #fff;
  z-index: 1000;

  ${largeScreen({
    height: `12vh`,
    overflow: `visible`,
  })}

  h2 {
    position: absolute;
    top: 1rem;
    left: 3%;
    font-size: 4rem;
    color: orange;
    font-family: "Lobster", cursive;

    ${extraLargeScreen({
      left: `9%`,
    })}
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 5%;
  color: orange;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  .icon {
    font-size: 4rem;
  }

  ${largeScreen({ display: `none` })}
`;

const ContainerBody = styled.div`
  margin-top: 12vh;

  ${largeScreen({
    position: `absolute`,
    top: 0,
    right: 0,
    marginTop: 0,
    height: `100%`,
    display: `flex`,
    justifyContent: `space-between`,
    width: `80%`,
    paddingRight: `3%`,
  })}
`;

const AuthButtonWrapper = styled.div`
  /* border: 1px solid; */
  background-color: blue;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.7rem;
  padding: 2rem 0;
  background-color: #0b1736;
  margin-top: 10vh;

  ${largeScreen({
    marginTop: 0,
    flexDirection: `row`,
    padding: 0,
    height: `auto`,
    backgroundColor: `#fff`,
  })}

  ${extraLargeScreen({
    marginRight: `7%`,
  })}

  button {
    color: #fff;
    border: none;
    outline: none;
    font-size: 1.5rem;
    cursor: pointer;

    &:not(:last-child) {
      background-color: transparent;

      ${largeScreen({
        color: `rgba(0,0,0,0.8)`,
      })}
    }

    &:last-of-type {
      background-color: #0236b9;
      padding: 1rem 3rem;
      border-radius: 3px;

      ${largeScreen({
        padding: `1rem 1.5rem`,
      })}
    }
  }
`;
