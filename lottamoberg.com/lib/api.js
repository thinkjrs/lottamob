import { sanityClient, previewClient } from './sanity';

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
  title,
  date,
  excerpt,
  body,
  'slug': slug.current,
  'mainImage': mainImage.asset,
`;

const getClient = (preview) => (preview ? previewClient : sanityClient);

export async function getPreviewPostBySlug(slug, postName = 'post') {
  const data = await getClient(true).fetch(
    `*[_type == '${postName}' && slug.current == $slug] | order(date desc){
      ${postFields}
      body 
    }`,
    { slug },
  );
  return data[0];
}

export async function getAllPostsWithSlug(postName = 'post') {
  const data = await sanityClient.fetch(
    `*[_type == '${postName}']{ 'slug': slug.current }`,
  );
  return data;
}

export async function getAllPostsForHome(preview, postName = 'post') {
  const results = await getClient(preview).fetch(
    `*[_type == '${postName}'] | order(date desc) {
      ${postFields}
    }`,
  );
  return getUniquePosts(results);
}
export async function getAllPostsForHome2(preview, postName = 'post') {
  const results = await getClient(preview).fetch(
    `*[_type == '${postName}'] order(date desc, _updatedAt desc) {
      ${postFields}
    }`,
  );
  return results;
}
export async function getPostAndMorePosts(slug, preview, postName = 'post') {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == '${postName}' && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
      }`,
        { slug },
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == '${postName}' && slug.current != $slug] | order(date desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug },
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
}

export async function getSanityQuery(preview, postName = 'post') {
  const query = `*[_type == '${postName}'] | order(date desc, _updatedAt desc) {
      ${postFields}
}`;
  console.log(`Query: ${query}`);
  const params = {};

  const curClient = getClient(preview);
  curClient.fetch(query, params).then((post) => {
    post.forEach((post) => {
      console.log(`${post.title}: ${post.excerpt}`);
    });
  });
}
