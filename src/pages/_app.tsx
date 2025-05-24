import { AppProps } from 'next/app';
import GlobalStyles from 'styles/global';
import SEO from '../../next-seo.config';
import { DefaultSeo } from 'next-seo';
import Loading from 'components/Loading';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { darkMode, lightMode } from 'styles/theme';
import ThemeSelector from 'components/ThemeSelector';

function App({ Component, pageProps }: AppProps) {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const theme = isDarkMode ? darkMode : lightMode;

	return (
		<ThemeProvider theme={theme}>
			<DefaultSeo {...SEO} />
			<GlobalStyles theme={theme} />
			<Loading />
			<ThemeSelector isDarkMode={isDarkMode} onClick={setIsDarkMode} />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default App;