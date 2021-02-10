import { css } from 'styled-components';

export const typography = css`
  /* base font */
  html {
    font-size: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: var(--line-height);
    color: var(--text);
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
    font-size: 1rem;
  }

  a {
    color: var(--accent-text);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 700;
    line-height: 1.3;
    color: var(--text);
  }

  h1 {
    font-size: var(--h1);
  }

  h2 {
    font-size: var(--h2);
  }

  h3 {
    font-size: var(--h3);
  }

  h4 {
    font-size: var(--h4);
  }

  h5 {
    font-size: var(--h5);
  }

  small {
    font-size: var(--small);
  }
`;
