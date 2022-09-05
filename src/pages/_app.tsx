import { AppProps } from 'next/app';
import GlobalStyles from 'styles/global';
import SEO from '../../next-seo.config';
import { DefaultSeo } from 'next-seo';
import Loading from 'components/Loading';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo {...SEO} />
			<GlobalStyles />
			<Loading />
			<Component {...pageProps} />
		</>
	);
}

export default App;