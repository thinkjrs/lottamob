// Dynamic, build-time blog page population by `id` in getStaticProps
// and getStaticPaths for server-side-rendering.
import SectionSeparator from '../../components/Layout/SectionSeparator';
import MoreStories from '../../components/Posts/MoreStories';
import { PostBody, PostHeader } from '../../components/Posts/Posts';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import { NextSeo } from 'next-seo';
import useRouter from 'next/router';

function ArticleMetaOG({ post, ogUrl }) {
  return (
    <>
      <title>{post?.title}</title>
      <meta property="og:title" content={post?.title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={ogUrl} />
      <meta property="article:section" content={`${post?.title} - Moberg`} />

      <meta property="article:published_time" content={post?.date} />
      <meta property="og:image" content={post?.mainImage} />
      <meta
        property="og:description"
        content={`${post?.title} by Lotta Moberg, PhD, CFA on ${post?.date}.`}
      />
    </>
  );
}
export default function BlogPost({ post, morePosts, preview }) {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title={post?.title}
        description={`${post?.title} by Lotta Moberg, PhD, CFA.`}
        canonical={`https://www.lottamoberg.com${router.asPath}`}
        openGraph={{
          url: `https://www.lottamoberg.com${router.asPath}`,
          title: post?.title,
          description: post?.excerpt,
        }}
        twitter={{
          handle: '@lottamob',
          site: '@lottamob',
          cardType: 'summary_large_image',
        }}
      />
      <div className="pt-20" />
      <div className="container mx-auto px-5">
        <article id="content-start">
          <PostHeader
            title={post?.title}
            coverImage={post?.mainImage}
            date={post?.date}
            postName="research"
          />
          <PostBody content={post?.body} />
        </article>
        <SectionSeparator />{' '}
        {morePosts?.length > 0 && (
          <MoreStories posts={morePosts} postName="research" />
        )}
      </div>
    </>
  );
}
export async function getStaticProps({ params, preview = false }) {
  const posts = await getPostAndMorePosts(params.slug, preview, 'research');
  // query the data to render for posts
  return {
    props: {
      slug: params.slug,
      post: posts.post || null,
      morePosts: posts.morePosts || null,
      preview: preview,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
