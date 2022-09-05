import Map from 'types/Map';
import HomeTemplate from 'components/templates/Home';
import { GetPlacesQuery } from 'graphql/generated/graphql';
import client from 'services/graphqlClient';
import { GET_PLACES } from 'services/queries';

export default function Home({ places }: Map) {
	return <HomeTemplate places={places} />;
}

export const getStaticProps = async() => {
	const { places } = await client.request<GetPlacesQuery>(GET_PLACES);

	return {
		revalidate: 5,
		props: {
			places
		}
	};
};