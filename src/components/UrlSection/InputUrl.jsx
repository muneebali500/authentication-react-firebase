import { useState, useEffect } from "react";
import ShortUniqueId from "short-unique-id";
import UrlItem from "./UrlItem";

// import firebase methods
import db from "../../model/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

// import styles from styled-components
import styled from "styled-components";
import { desktopMediumScreen } from "../../responsive";

export default function InputUrl() {
  // console.log(`app called`);
  const [fullAndShortUrlList, setFullAndShortUrlList] = useState([]);
  const [inputValue, setInputValue] = useState(``);
  const [shortenBtn, setShortenBtn] = useState(true);
  const [ipAddress, setIpAddress] = useState(``);

  useEffect(() => {
    // console.log(`ip use effect called`);
    async function getIpAddress() {
      try {
        const ipData = await (
          await fetch(`https://api.ipify.org?format=json`)
        ).json();

        setIpAddress(ipData.ip);
      } catch {
        window.alert(`Couldn't able to get ip address`);
      }
    }

    getIpAddress();
  }, []);

  useEffect(() => {
    // console.log(`useeffect called`);

    //Function gets the urls data from database and pushes into local array variable => fullAndShortUrlList
    const getDataFromDatabase = async () => {
      try {
        const docs = [];
        const q = query(
          collection(db, "urlsData"),
          where("ipAddress", "==", ipAddress)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const fullAndShortUrl = {
            fullUrl: doc.data().fullUrl.slice(0, 60) + "...",
            shortUrl: doc.data().shortUrl,
            date: doc.data().date,
          };
          docs.push(fullAndShortUrl);
        });
        setFullAndShortUrlList([...docs]);
      } catch {
        window.alert(`Somethng went wrong getting data, please try again`);
      }
    };

    getDataFromDatabase();
  }, [inputValue, ipAddress]);

  async function handleSubmit(e) {
    e.preventDefault();
    setShortenBtn(false);

    // generate short unique id
    const shortUID = new ShortUniqueId({ lenght: 7 })();

    // create urlsData object to add into database
    const urlsData = {
      fullUrl: inputValue,
      shortUrl: `${window.location.href}${shortUID}`,
      date: new Date(),
      ipAddress,
    };

    try {
      // query to add data into database
      const docRef = await addDoc(collection(db, "urlsData"), urlsData);
      console.log(`document written with id ${docRef.id}`);
    } catch {
      window.alert(`Somethign went wrong adding, please try again`);
    }

    setInputValue(``);
    setShortenBtn(true);
  }

  // Sorting of array for reference
  /* FullAndShortUrlList.sort(function (a, b) {
    let keyA = a.date,
      keyB = b.date;

    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  }); */

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type="url"
          placeholder="Shorten your link"
          pattern="(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)"
          required
        />
        <button>{shortenBtn ? "Shorten" : "Shortening..."}</button>
      </Form>

      <UrlList>
        {fullAndShortUrlList
          .sort((object1, object2) => object2.date - object1.date)
          .slice(0, 3)
          .map((urlObj, index) => (
            <UrlItem key={index} {...urlObj} />
          ))}
      </UrlList>
    </Container>
  );
}

/*------------------------------ STYLING USING CSS LIBRARY:- STYLED COMPONENTS ---------------------------------*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Container = styled.section`
  background-color: #0b1736;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`;

const Form = styled.form`
  width: 112rem;
  max-width: 95%;
  margin-bottom: 0rem;
  display: flex;
  flex-wrap: wrap;

  input {
    flex: 1;
    display: inline-block;
    font-size: 2rem;
    padding: 2rem;
    border-radius: 0.5rem;
    outline-color: #4c4cda;
  }

  button {
    padding: 2rem 6rem;
    font-size: 2rem;
    border-radius: 0.5rem;
    margin-left: 2rem;
    background-color: #1c1cca;
    color: #fff;
    cursor: pointer;
    outline: none;
    border: none;

    /* @media (max-width: 768px) {
      width: 100%;
      margin-left: 0;
      margin-top: 1rem;
      margin-bottom: 1.5rem;
    } */

    ${desktopMediumScreen({
      width: `100%`,
      margin: `1rem 0`,
    })}

    &:hover {
      background-color: #090999;
    }
  }
`;
const UrlList = styled.ul`
  width: 112rem;
  max-width: 95%;
  list-style-type: none;
  border-radius: 3px;
  margin-top: 2rem;
  overflow: hidden;

  ${desktopMediumScreen({
    borderRadius: 0,
  })}
`;
