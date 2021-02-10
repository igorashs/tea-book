import { css } from 'styled-components';

export const variables = css`
  :root {
    /* colors */
    --body-bg: #212121;
    --text: #cdcdcd;
    --accent-text: #60b7d2;

    /* typography */
    --line-height: 1.75;
    --baseline: calc(1rem * var(--line-height));
    --h1: 3.052rem;
    --h2: 2.441rem;
    --h3: 1.953rem;
    --h4: 1.563rem;
    --h5: 1.25rem;
    --small: 0.8rem;

    /* spacing */
    --spacing: var(--baseline);
    --spacing-2: calc(var(--baseline) * 2);
    --spacing-3: calc(var(--baseline) * 3);
    --spacing-4: calc(var(--baseline) * 4);
    --spacing-div-2: calc(var(--baseline) / 2);
    --spacing-div-3: calc(var(--baseline) / 3);
    --spacing-div-4: calc(var(--baseline) / 4);
  }
`;
