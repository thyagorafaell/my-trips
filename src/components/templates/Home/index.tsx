import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
import LinkWrapper from 'components/LinkWrapper';
import dynamic from 'next/dynamic';
import MapProps from 'types/Map';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function HomeTemplate({ places }: MapProps) {
	return (
		<>
			<LinkWrapper href={'/about'}>
				<InfoOutline size={32} />
			</LinkWrapper>
			<Map places={places} />
		</>
	);
}