import styled from 'styled-components';

export const Switcher = styled.div`
	position: fixed;
	z-index: 1100;
	bottom: var(--medium);
	right: var(--medium);
	color: var(--text);
	cursor: pointer;

	svg {
		transition: color 0.3 ease-in-out;
	}

	&:hover {
		svg {
			color: var(--highlight);
		}
	}
`;