import { useRouter } from 'next/router';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import * as S from './styles';

type Place = {
	id: string;
	name: string;
	slug: string;
	location: {
		latitude: number;
		longitude: number;
	};
};

export type MapProps = {
	places?: Place[];
};

const MAPBOX_APIKEY = process.env.NEXT_PUBLIC_MAPBOX_APIKEY;
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID;
const MAPBOX_DARKMODE = process.env.NEXT_PUBLIC_MAPBOX_DARKMODE;
const mapboxStylesURL = `https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_DARKMODE}/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_APIKEY}`;
const mapboxCopyrights = `&copy; <a href="https://www.app.mapbox.com/feedback">Mapbox</a>
	contributors &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;

const CustomTileLayer = () => {
	if (MAPBOX_APIKEY)
		return (
			<TileLayer attribution={mapboxCopyrights} url={mapboxStylesURL} />
		);

	return (
		<TileLayer
			attribution={
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}
			url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
		/>
	);
};

const Map = ({ places }: MapProps) => {
	const router = useRouter();

	return (
		<S.MapWrapper>
			<MapContainer
				center={[0, 0]}
				zoom={3}
				minZoom={3}
				maxBounds={[
					[-180, 180],
					[180, -180]
				]}
				style={{ height: '100%', width: '100%' }}
			>
				{ <CustomTileLayer /> }
				{ places?.map((place: Place) => (
					<Marker
						key={`place-${place.id}`}
						position={[
							place.location.latitude,
							place.location.longitude
						]}
						eventHandlers={{
							click() {
								router.push(`/place/${place.slug}`);
							}
						}}
						title={place.name}
					/>
				)) }
			</MapContainer>
		</S.MapWrapper>
	);
};

export default Map;