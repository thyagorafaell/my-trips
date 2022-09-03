import { render, screen } from '@testing-library/react';
import LinkWrapper from '.';

describe('LinkWrapper', () => {
	it('should render link and children', () => {
		render(<LinkWrapper href={'/xpto'}>{ 'valor' }</LinkWrapper>);

		const children = screen.getByText(/valor/i);

		expect(children).toBeInTheDocument();
		expect(children).toHaveAttribute('href', '/xpto');
	});
});