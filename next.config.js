// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

const withPWA = nextPWA({
	dest: 'public',
	disable: !isProd
});

module.exports = withPWA({
	swcMinify: true,
	images: {
		domains: ['media.graphassets.com']
	}
});