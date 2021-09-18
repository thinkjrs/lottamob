import Intro from '../../components/Intro/Intro';
import HeroPost from '../../components/Posts/HeroPost';
import MoreStories from '../../components/Posts/MoreStories';
import { getAllPostsForHome } from '../../lib/api';

export default function BlogPage({ allPosts }) {
  if (!allPosts) return null;
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <div className="px-2">
      <div className="pt-24" />
      <div className="container mx-auto px-5">
        <Intro
          blogTitle="Research"
          blogDescription="Deep dives into challenging questions within economics, policy, and geoplitics."
        />
        <div className="pt-24" />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.mainImage}
            date={heroPost.date}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
            postTypePath="research"
          />
        )}
        {morePosts.length > 0 && (
          <MoreStories posts={morePosts} postName="research" />
        )}
      </div>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  /* Research Content */
  const allPosts = await getAllPostsForHome(preview, 'research');
  return {
    props: {
      allPosts: allPosts,
      preview: preview,
    },
  };
}
