/* eslint-disable max-len */
const projectDescription = 'Este é o projeto realizado no curso NextJS na prática, de autoria do Willian Justen. O site foi desenvolvido utilizando NextJS e GraphQL - usando a camada free da Hygraph - por Thyago Rafael e publicado na Vercel. Neste site estarão listados alguns destinos que eu e minha família conhecemos ou temos vontade de conhecer :) Veja no Github: https://github.com/thyagorafaell/my-trips.';
const projectTitle = 'My Trips - thyagorafaell';
const projectUrl = 'http://my-trips-green.vercel.app';

export default {
	canonical: projectUrl,
	description: projectDescription,
	title: projectTitle,
	openGraph: {
		description: projectDescription,
		images: [{
			url: `${projectUrl}/img/cover.png`,
			width: 120,
			height: 630,
			alt: projectTitle
		}],
		locale: 'pt_BR',
		siteName: projectTitle,
		title: projectTitle,
		type: 'website',
		url: projectUrl
	},
	twitter: {
		cardType: 'summary_large_image',
		handle: '@handle',
		site: '@site'
	}
};
