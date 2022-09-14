import styled from 'styled-components';

export const Gallery = styled.section`
	display: grid;
	grid-gap: var(--medium);

	img {
		background: #f6f7f8;
		background-image: linear-gradient(
			to right,
			#f6f7f8 0%,
			#edeef1 20%,
			#f6f7f8 40%,
			#f6f7f8 100%
		);
		background-size: 80rem 14rem;
		animation: placeholderShimmer 1s linear infinite forwards;
	}

	@keyframes placeholderShimmer {
		0% {
			background-position: -40rem 0;
		}
		0% {
			background-position: 40rem 0;
		}
	}
`;