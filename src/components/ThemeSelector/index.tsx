import { MoonOutline, SunOutline } from '@styled-icons/evaicons-outline';
import { memo, useCallback } from 'react';
import { Switcher } from './styles';

type Props = {
	isDarkMode: boolean,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onClick: any
};

const ThemeSelector = ({ isDarkMode, onClick }: Props) => {
	const handleClick = useCallback(() => {
		return onClick(!isDarkMode);
	}, [onClick, isDarkMode]);

	return (
		<Switcher onClick={handleClick}>
			{ isDarkMode ? <SunOutline size={16} /> : <MoonOutline size={16} /> }
		</Switcher>
	);
};

export default memo(ThemeSelector);