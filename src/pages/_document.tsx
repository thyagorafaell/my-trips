import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App =>
						function enhance(props) {
							return sheet.collectStyles(<App {...props} />);
						}
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{ initialProps.styles }
						{ sheet.getStyleElement() }
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang={'pt-BR'}>
				<Head>
					<link rel={'shortcut icon'} href={'/img/icon.png'} />
					<link rel={'manifest'} href={'/manifest.json'} />
					<link
						rel={'stylesheet'}
						href={'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'}
						integrity={
							'sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=='
						}
						crossOrigin={''}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}