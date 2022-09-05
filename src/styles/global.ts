import { createGlobalStyle } from 'styled-components';

export const colors = {
	highlight: '#ecb365',
	background: '#041c32',
	secondary: '#04293a',
	detail: '#064663',
	white: '#eeeeee'
};

const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: ${colors.highlight};
    --background: ${colors.background};
    --secondary: ${colors.secondary};
    --detail: ${colors.detail};
    --white: ${colors.white};
    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background: var(--background);
    color: var(--white);
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  p {
    font-size: 2rem;
    line-height: var(--medium);
  }

  a {
    color: var(--highlight);
  }
`;

export default GlobalStyles;