import client from '../../services/graphqlClient';
import { GET_PLACES, GET_PLACE_BY_SLUG } from '../../services/queries';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { GetPlaceBySlugQuery, GetPlacesQuery } from 'graphql/generated/graphql';
import PlacesTemplate, {
	PlacesTemplateProps
} from 'components/templates/Places';

export default function Place({ place }: PlacesTemplateProps) {
	const router = useRouter();

	if (router.isFallback) return 'loading...';

	return <PlacesTemplate place={place} />;
}

export async function getStaticPaths() {
	const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
		first: 3
	});

	const paths = places.map(({ slug }) => ({
		params: { slug }
	}));

	return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async({ params }) => {
	const { place } = await client.request<GetPlaceBySlugQuery>(
		GET_PLACE_BY_SLUG,
		{ slug: params?.slug }
	);

	if (!place) return { notFound: true };

	return {
		revalidate: 5,
		props: {
			place
		}
	};
};