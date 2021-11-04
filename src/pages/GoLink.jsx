import { useEffect } from "react";

import db from "../model/firebase";
import { getDocs, collection, query, where } from "@firebase/firestore";

import styled from "styled-components";

export default function GoLink() {
  useEffect(() => {
    console.log(`useeffect called`);

    //Function gets the urls data from database and pushes into local array variable => fullAndShortUrlList
    const findShortUrlAndReplaceWithOriginalUrl = async () => {
      try {
        const q = query(
          collection(db, "urlsData"),
          where("shortUrl", "==", window.location.href)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          return window.location.replace(doc.data().fullUrl);
        });
      } catch {
        window.alert(`Somethng went wrong getting url, please try again`);
      }
    };

    findShortUrlAndReplaceWithOriginalUrl();
  }, []);

  return <Loading>loading....</Loading>;
}

const Loading = styled.div`
  font-size: 10rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: blueviolet;
`;
