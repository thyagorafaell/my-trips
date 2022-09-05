import NextNProgress from 'nextjs-progressbar';
import { memo } from 'react';
import { ThemeConsumer } from 'styled-components';

const Loading = () => (
	<ThemeConsumer>
		{
			theme => (
				<NextNProgress
					color={theme.highlight}
					startPosition={0.3}
					stopDelayMs={200}
					height={3}
				/>
			)
		}
	</ThemeConsumer>
);

export default memo(Loading);