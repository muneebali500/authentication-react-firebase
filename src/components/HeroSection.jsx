<<<<<<< HEAD
// import { useEffect } from "react";

import styled from "styled-components";
import { largeScreen, extraLargeScreen, mediumScreen } from "../responsive";

import { Menu } from "@material-ui/icons";

import { useGlobalContext } from "../store/GlobalContext";
=======
////////////// import custom styling
import {
  hero,
  hero_text_container,
  clients_wrapper,
  hero_img_container,
} from "../styles/hero.module.scss";
>>>>>>> 41577c89619ab4544bafbfe2f5ebca78ac943c4a

/*-------------------------------------------- Start of Main Component --------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------*/
export default function HeroSection() {
  const { setIsNavBarOpen } = useGlobalContext();

  return (
<<<<<<< HEAD
    <Container>
      <Top>
        <h2>bitly</h2>
        <button onClick={() => setIsNavBarOpen(true)}>
          <Menu className="icon" />
        </button>
      </Top>
      <Center>
        <figure>
          <img
            src="https://docrdsfx76ssb.cloudfront.net/static/1635458173/pages/wp-content/uploads/2020/05/illo-mobile-810x480-1.jpg"
            alt="Hero"
          />
        </figure>
        <div className="text">
          <h1>Short links, big results</h1>
          <p>
            A URL shortener built with powerful tools to help you grow and
            protect your brand.
          </p>
          <button>Get Started for Free</button>
        </div>
      </Center>
    </Container>
=======
    <div className={hero}>
      <div className={hero_text_container}>
        {/*///////////////////////////////////////left side text section  */}
        <h1>Join the world's work marketplace</h1>
        <p>Find great talent. Build your business.</p>{" "}
        <p>Take your career to the next level.</p>
        <button>Find Talent</button>
        <button>Find Work</button>
        {/*////////////////////////////////// left side bottom client section  */}
        <div className={clients_wrapper}>
          <h2>Trusted By</h2>
          <span>
            <i className="fab fa-microsoft"></i> Microsoft
          </span>
          <span>
            <i className="fab fa-airbnb"></i> Airbnb
          </span>
          <span>
            <i className="fab fa-amazon"></i> Amazon
          </span>
          <span>
            <i className="fab fa-apple"></i> Apple
          </span>
        </div>
      </div>

      {/*////////////////////////////// Right Side - contains image only  */}
      <div className={hero_img_container}>
        <img
          src="https://www.upwork.com/static/assets/Brontes/67282aa/img/globe-mobile.04c98cc.jpg"
          alt="Global talent illustration"
        />
      </div>
    </div>
>>>>>>> 41577c89619ab4544bafbfe2f5ebca78ac943c4a
  );
}

const Container = styled.section`
  min-height: 100vh;
  padding: 1rem 3%;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 4rem;
    color: orange;
    font-family: "Lobster", cursive;
    background-color: #fff;
  }

  button {
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
  }
`;

const Center = styled.div`
  /* border: 1px solid; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;

  ${mediumScreen({
    marginTop: `0rem`,
  })}

  ${largeScreen({
    flexDirection: `row`,
    marginTop: `10rem`,
    overflow: `hidden`,
  })}

  ${extraLargeScreen({
    marginLeft: `6%`,
  })}



  

  figure {
    /* border: 1px solid; */
    height: 50vw;
    width: 100%;

    ${mediumScreen({
      height: `30vw`,
    })}

    ${largeScreen({
      order: 2,
      height: `40vw`,
      transform: `translateX(10rem)`,
    })}

    ${extraLargeScreen({
      height: `30vw`,
      transform: `translateX(7.5rem)`,
    })}

    img {
      height: 100%;
      width: 100%;
    }
  }

  div.text {
    /* border: 1px solid; */
    margin-top: 3rem;

    ${largeScreen({
      marginTop: 0,
    })}

    h1 {
      font-size: 4rem;
      color: rgba(0, 0, 0, 0.8);

      ${largeScreen({
        fontSize: `6.5rem`,
      })}
    }

    p {
      font-size: 2rem;
      margin: 1rem 0;
      color: rgba(0, 0, 0, 0.8);

      ${largeScreen({
        fontSize: `2.5rem`,
      })}
    }

    button {
      color: #fff;
      padding: 1.4rem;
      text-align: center;
      width: 100%;
      font-size: 1.5rem;
      border-radius: 5px;
      background-color: #0236b9;
      margin-top: 1rem;
      border: none;
      outline: none;
      cursor: pointer;

      ${largeScreen({
        width: `50%`,
        padding: `2rem`,
        fontSize: `1.8rem`,
      })}
    }
  }
`;
