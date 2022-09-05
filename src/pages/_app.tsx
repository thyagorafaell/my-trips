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

	return (
		<ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
			<DefaultSeo {...SEO} />
			<GlobalStyles />
			<Loading />
			<ThemeSelector isDarkMode={isDarkMode} onClick={setIsDarkMode} />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default App;