import { MapProps } from 'components/Map'
import HomeTemplate from 'components/templates/Home'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import client from 'services/graphqlClient'
import { GET_PLACES } from 'services/queries'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return { props: { places } }
}
