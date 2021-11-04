import { useState, useEffect } from "react";

import ClipboardJS from "clipboard";
import ShortUniqueId from "short-unique-id";

import styled from "styled-components";
import { desktopMediumScreen } from "../../responsive";

export default function UrlItem({ fullUrl, shortUrl }) {
  const [copyBtn, setCopyBtn] = useState(true);
  const shortUID = new ShortUniqueId({ lenght: 7 })();
  new ClipboardJS(".btn");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopyBtn(true);
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, [copyBtn]);

  return (
    <UrlData>
      <span>{fullUrl}</span>
      <a href={fullUrl} target="blank" id={shortUID}>
        {shortUrl}
      </a>
      <button
        className="btn"
        data-clipboard-target={`#${shortUID}`}
        onClick={(e) => setCopyBtn(false)}
      >
        {copyBtn ? "Copy" : "Copied"}
      </button>
    </UrlData>
  );
}

const UrlData = styled.li`
  display: flex;
  /* flex-wrap: wrap; */
  padding: 1.5rem 2rem;
  font-size: 1.5rem;
  column-gap: 2rem;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.7);
  align-items: center;
  /* border-radius: 3px; */

  ${desktopMediumScreen({
    flexDirection: `column`,
    marginBottom: `1rem`,
    borderRadius: `3px`,
  })}

  & > * {
    ${desktopMediumScreen({
      width: `100%`,
      margin: `1rem 0`,
    })}
  }

  span {
    flex-basis: 70%;
  }

  a {
    flex-basis: 22%;
  }

  button {
    flex-basis: 8%;
    padding: 1rem;
    cursor: pointer;
    background-color: #cedafa;
    border: none;
    outline: none;
    color: blue;
    border-radius: 0.5rem;

    &:hover {
      background-color: #a9bdf3;
    }
  }
`;
