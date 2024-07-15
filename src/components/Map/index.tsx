import { LatLngBoundsExpression } from 'leaflet';
import { MapContainer } from 'react-leaflet';
import Map from 'types/Map';
import Place from 'types/Place';
import CustomTileLayer from './CustomTileLayer';
import MapMarker from './MapMarker';
import * as S from './styles';

const maxBounds: LatLngBoundsExpression = [
	[-180, 180],
	[180, -180]
];

const mapContainterStyle = {
	height: '100%',
	width: '100%'
};

const MapComponent = ({ places }: Map) => {
	return (
		<S.MapWrapper>
			<MapContainer
				center={[0, 0]}
				zoom={3}
				minZoom={3}
				maxBounds={maxBounds}
				style={mapContainterStyle}
			>
				<CustomTileLayer />
				{
					places?.map((place: Place) => <MapMarker key={place.id} place={place} />)
				}
			</MapContainer>
		</S.MapWrapper>
	);
};

export default MapComponent;