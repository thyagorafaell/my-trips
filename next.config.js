// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

const withPWA = nextPWA({
	dest: 'public',
	disable: !isProd
});

module.exports = withPWA({
	images: {
		remotePatterns: [{
			protocol: 'https',
			hostname: 'media.graphassets.com',
			pathname: '**',
		}]
	}
});