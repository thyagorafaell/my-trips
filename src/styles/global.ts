import { createGlobalStyle } from 'styled-components';
import { ThemeType } from 'types/Theme';

declare module 'styled-components' {
	export interface DefaultTheme {
		name: string;
	}
}

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  :root {
    --highlight: ${({ theme }) => theme.highlight};
    --background: ${({ theme }) => theme.background};
    --secondary: ${({ theme }) => theme.secondary};
    --detail: ${({ theme }) => theme.detail};
    --text: ${({ theme }) => theme.text};
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
    color: var(--text);
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