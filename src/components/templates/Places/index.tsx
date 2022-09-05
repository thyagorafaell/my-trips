import { CloseOutline } from '@styled-icons/evaicons-outline';
import LinkWrapper from 'components/LinkWrapper';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as S from '../PageTemplate/styles';
import * as PlaceStyles from './styles';

type ImageProps = {
	url: string
	height: number
	width: number
}

export type PlacesTemplateProps = {
	place: {
		slug: string
		name: string
		description: {
			html: string
			text: string
		}
		gallery: ImageProps[]
	}
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
	const router = useRouter();

	if (router.isFallback) return null;

	return (
		<>
			<NextSeo
				title={`${place.name} - My Trips`}
				description={place.description?.text}
			/>
			<LinkWrapper href={'/'}>
				<CloseOutline size={32} />
			</LinkWrapper>
			<S.Wrapper>
				<S.Container>
					<S.Heading>{ place.name }</S.Heading>
					<S.Body>
						<div
							dangerouslySetInnerHTML={{
								__html: place.description.html
							}}
						/>
						<PlaceStyles.Gallery>
							{ place.gallery.map(image => (
								<Image
									key={image.url}
									alt={place.name}
									src={image.url}
									height={image.height}
									width={image.width}
								/>
							)) }
						</PlaceStyles.Gallery>
					</S.Body>
				</S.Container>
			</S.Wrapper>
		</>
	);
}