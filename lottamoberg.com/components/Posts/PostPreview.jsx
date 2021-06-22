import { PostDate } from './Posts';
import CoverImage from './CoverImage';
import Link from 'next/link';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  postName = 'blog', // 'research' | 'article'
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          url={coverImage}
          postTypePath={postName}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/${postName}/${slug}`} href={`/${postName}/[slug]`}>
          <a href={`/${postName}/${slug}`} className="hover:underline">
            {title}
          </a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <PostDate dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
