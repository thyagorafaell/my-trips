import { CloseOutline } from '@styled-icons/evaicons-outline';
import LinkWrapper from 'components/LinkWrapper';
import { NextSeo } from 'next-seo';
import * as S from './styles';

export type PageTemplateProps = {
	heading: string
	content: string
}

const PageTemplate = ({ heading, content }: PageTemplateProps) => (
	<>
		<NextSeo title={`My Trips - ${heading}`} />
		<S.Wrapper>
			<S.Container>
				<LinkWrapper href={'/'}>
					<CloseOutline size={32} />
				</LinkWrapper>
				<S.Heading>{ heading }</S.Heading>
				<S.Body>
					<div dangerouslySetInnerHTML={{ __html: content }} />
				</S.Body>
			</S.Container>
		</S.Wrapper>
	</>
);

export default PageTemplate;