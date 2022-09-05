import Link from 'next/link';
import { memo } from 'react';
import * as S from './styles';

type LinkWrapperProps = {
	href: string
	children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
	<S.Wrapper>
		<Link href={href}>{ children }</Link>
	</S.Wrapper>
);

export default memo(LinkWrapper);