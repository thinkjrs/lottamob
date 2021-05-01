// pages/posts/[slug].js
import ErrorPage from 'next/error'
import {useRouter} from 'next/router'
import {groq} from 'next-sanity'
import {
  getClient,
  usePreviewSubscription,
  urlFor,
  PortableText
} from '../../lib/sanity'

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    body,
    mainImage,
    categories[]->{
      _id,
      title
    },
    "slug": slug.current
  }
`

export default function Post({data, preview}) {
  const router = useRouter()
  if (!router.isFallback && !data.post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const {data: post} = usePreviewSubscription(postQuery, {
    params: {slug: data.post.slug},
    initialData: data.post,
    enabled: preview,
  })

  const {title, mainImage, body} = post

  return (
    <article>
      <h2>{title}</h2>
      <figure>
        <img src={urlFor(mainImage).url()} />
      </figure>
      <PortableText blocks={body} />
      <aside>

      </aside>
    </article>
  )
}

export async function getStaticProps({params, preview = false}) {
  const post = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })

  return {
    props: {
      preview,
      data: {post},
    },
  }
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}
