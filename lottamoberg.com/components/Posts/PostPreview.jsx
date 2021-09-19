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
          hero={false}
        />
      </div>

      <div className="text-lg mb-4">
        <PostDate dateString={date} />
      </div>
      <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
        {excerpt}
      </p>
    </div>
  );
}
