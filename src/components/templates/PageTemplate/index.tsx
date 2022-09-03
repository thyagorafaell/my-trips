import { CloseOutline } from '@styled-icons/evaicons-outline';
import LinkWrapper from 'components/LinkWrapper';
import * as S from './styles';

export type PageTemplateProps = {
	heading: string
	content: string
}

const PageTemplate = ({ heading, content }: PageTemplateProps) => (
	<S.Content>
		<LinkWrapper href={'/'}>
			<CloseOutline size={32} />
		</LinkWrapper>
		<S.Heading>{ heading }</S.Heading>
		<S.Body>
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</S.Body>
	</S.Content>
);

export default PageTemplate;