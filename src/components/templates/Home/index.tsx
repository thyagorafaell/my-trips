import LinkWrapper from 'components/LinkWrapper';
import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
import MapProps from 'types/Map';
import { NextSeo } from 'next-seo';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function HomeTemplate({ places }: MapProps) {
	return (
		<>
			<NextSeo
				title={'My Trips'}
				description={'Lorem ipsum dolor sit amet'}
			/>
			<LinkWrapper href={'/about'}>
				<InfoOutline size={32} />
			</LinkWrapper>
			<Map places={places} />
		</>
	);
}