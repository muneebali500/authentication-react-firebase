import { css } from "styled-components";

/////////////// Mobile First Media Queries
export const mediumScreen = (props) => {
  return css`
    @media only screen and (min-width: 48em) {
      ${props}
    }
  `;
};

export const largeScreen = (props) => {
  return css`
    @media only screen and (min-width: 64em) {
      ${props}
    }
  `;
};

export const extraLargeScreen = (props) => {
  return css`
    @media only screen and (min-width: 80em) {
      ${props}
    }
  `;
};

/////////////// Desktop First Media Query
/////////// Only URL Section is created using Desktop first approach. All other sections are created using Mobile first approach
export const desktopMediumScreen = (props) => {
  return css`
    @media only screen and (max-width: 48em) {
      ${props}
    }
  `;
};
