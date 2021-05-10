import {sanityClient, previewClient} from './sanity';


const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const postFields = `
  name,
  title,
  date,
  excerpt,
  'slug': slug.current,
  'mainImage': coverImage.asset,
`;

const getClient = (preview) => (preview ? previewClient : sanityClient);

export async function getPreviewPostBySlug(slug, postName = 'post') {
  const data = await getClient(true).fetch(
    `*[_type == ${postName} && slug.current == $slug] | order(date desc){
      ${postFields}
      content
    }`,
    {slug}
  );
  return data[0];
}

export async function getAllPostsWithSlug(postName = 'post') {
  const data = await sanityClient.fetch(`*[_type == ${postName}]{ 'slug': slug.current }`);
  return data;
}

export async function getAllPostsForHome(preview, postName = 'post') {
  const results = await getClient(preview).fetch(
    `*[_type == ${postName}] | order(date desc, _updatedAt desc){
      ${postFields}
    }`
  );
  return getUniquePosts(results);
}

export async function getPostAndMorePosts(slug, preview, postName = 'post') {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == ${postName} && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        content,
      }`,
        {slug}
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == ${postName} && slug.current != $slug] | order(date desc, _updatedAt desc){
        ${postFields}
        content,
      }[0...2]`,
      {slug}
    ),
  ]);
  return {post, morePosts: getUniquePosts(morePosts)};
}
