import NextNProgress from 'nextjs-progressbar';
import { memo } from 'react';
import { colors } from 'styles/global';

const Loading = () => (
	<NextNProgress
		color={colors.highlight}
		startPosition={0.3}
		stopDelayMs={200}
		height={3}
	/>
);

export default memo(Loading);