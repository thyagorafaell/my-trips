import client from '../services/graphqlClient';
import { GET_PAGE_BY_SLUG, GET_PAGES } from '../services/queries';
import PageTemplate, {
	PageTemplateProps
} from '../components/templates/PageTemplate';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql';

export default function Page({ heading, content }: PageTemplateProps) {
	const router = useRouter();

	if (router.isFallback) return 'loading...';

	return <PageTemplate heading={heading} content={content} />;
}

export async function getStaticPaths() {
	const { pages } = await client.request<GetPagesQuery>(GET_PAGES, {
		first: 3
	});
	const paths = pages.map(({ slug }) => ({
		params: { slug }
	}));

	return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async({ params }) => {
	const { page } = await client.request<GetPageBySlugQuery>(
		GET_PAGE_BY_SLUG,
		{
			slug: params?.slug
		}
	);

	if (!page) return { notFound: true };

	return {
		props: {
			heading: page.heading,
			content: page.content.html
		}
	};
};