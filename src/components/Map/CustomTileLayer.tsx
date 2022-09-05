import { memo } from 'react';
import { TileLayer } from 'react-leaflet';

const MAPBOX_APIKEY = process.env.NEXT_PUBLIC_MAPBOX_APIKEY;
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID;
const MAPBOX_DARKMODE = process.env.NEXT_PUBLIC_MAPBOX_DARKMODE;
const mapboxStylesURL = `https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_DARKMODE}/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_APIKEY}`;
const mapboxCopyrights = `&copy; <a href="https://www.app.mapbox.com/feedback">Mapbox</a>
	contributors &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;
const openMapStylesURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const openMapCopyrights = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const CustomTileLayer = () => {
	let copyrights = openMapCopyrights;
	let stylesURL = openMapStylesURL;

	if (MAPBOX_APIKEY) {
		copyrights = mapboxCopyrights;
		stylesURL = mapboxStylesURL;
	}

	return <TileLayer attribution={copyrights} url={stylesURL} />;
};

export default memo(CustomTileLayer);