import styled from 'styled-components';

export const Wrapper = styled.section`
	padding: var(--large) var(--medium);
`;

export const Container = styled.section`
	max-width: var(--container);
	margin: auto;
`;

export const Heading = styled.h1`
	font-size: var(--large);
	margin-bottom: var(--large);
`;

export const Body = styled.main`
	margin-bottom: var(--large);

	p {
		margin-bottom: var(--medium);
	}
`;