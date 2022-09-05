import { LatLngExpression } from 'leaflet';
import { useRouter } from 'next/router';
import { memo, useMemo } from 'react';
import { Marker } from 'react-leaflet';
import Place from 'types/Place';

type Props = {
	place: Place
};

const Map = ({ place }: Props) => {
	const { location, slug, name } = place;
	const router = useRouter();

	const position: LatLngExpression = useMemo(() => ([
		location.latitude,
		location.longitude
	]), [location.latitude, location.longitude]);

	const eventHandlers = useMemo(() => ({
		click() {
			router.push(`/place/${slug}`);
		}
	}), [router, slug]);

	return <Marker position={position} eventHandlers={eventHandlers} title={name} />;
};

export default memo(Map);