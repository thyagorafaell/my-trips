import { MapContainer, TileLayer, Marker } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps) => (
  <MapContainer
    center={[0, 0]}
    zoom={3}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
    />
    {places?.map((place: Place) => (
      <Marker
        key={`place-${place.id}`}
        position={[place.location.latitude, place.location.longitude]}
        title={place.name}
      />
    ))}
  </MapContainer>
)

export default Map
