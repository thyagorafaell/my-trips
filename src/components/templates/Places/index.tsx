import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as S from './styles'

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
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>
            <h1>{place.name}</h1>
          </S.Heading>
          <S.Body>
            <div dangerouslySetInnerHTML={{ __html: place.description.html }} />
            <S.Gallery>
              {place.gallery.map((image) => (
                <Image
                  key={image.url}
                  alt={place.name}
                  src={image.url}
                  height={image.height}
                  width={image.width}
                />
              ))}
            </S.Gallery>
          </S.Body>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
