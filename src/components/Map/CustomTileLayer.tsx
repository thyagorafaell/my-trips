import { TileLayer as TileLayerType } from 'leaflet';
import { memo, useEffect, useMemo, useRef } from 'react';
import { TileLayer } from 'react-leaflet';
import { ThemeConsumer } from 'styled-components';
import { ThemeName } from 'types/Theme';

const MAPBOX_APIKEY = process.env.NEXT_PUBLIC_MAPBOX_APIKEY;
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID;
const MAPBOX_DARKMODE = process.env.NEXT_PUBLIC_MAPBOX_DARKMODE;
const MAPBOX_LIGHTMODE = process.env.NEXT_PUBLIC_MAPBOX_LIGHTMODE;
const mapboxCopyrights = `&copy; <a href="https://www.app.mapbox.com/feedback">Mapbox</a>
	contributors &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;
const openMapStylesURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const openMapCopyrights = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

type Props = {
	name: ThemeName
}

const Presentation = ({ name }: Props) => {
	const copyrights = MAPBOX_APIKEY ? mapboxCopyrights : openMapCopyrights;
	const ref = useRef<TileLayerType>(null);

	const url = useMemo(() => {
		let stylesURL = openMapStylesURL, themeId;

		if (MAPBOX_APIKEY) {
			themeId = (name === ThemeName.Dark) ? MAPBOX_DARKMODE : MAPBOX_LIGHTMODE;
			stylesURL = `https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${themeId}/tiles/256/{z}/{x}/{y}` +
				`?access_token=${MAPBOX_APIKEY}`;
		}

		return stylesURL;
	}, [name]);

	useEffect(() => {
		ref.current?.setUrl(url);
	}, [ref, url]);

	return <TileLayer ref={ref} attribution={copyrights} url={url} />;
};

const CustomTileLayer = () => {
	return (
		<ThemeConsumer>
			{
				theme => {
					if (!theme) return null;

					const { name } = theme;

					return <Presentation name={name as ThemeName} />;
				}
			}
		</ThemeConsumer>
	);
};

export default memo(CustomTileLayer);