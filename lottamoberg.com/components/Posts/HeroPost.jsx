import {PostDate} from './Posts';
import CoverImage from '../Posts/CoverImage';
import Link from 'next/link';

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  postTypePath = 'blog', // one of 'blog', 'articles', 'research'
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={title} url={coverImage} postTypePath={postTypePath} />
      </div>
      <div className="md:grid md:grid-cols-1 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div >
          {/*<h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link
              as={`/${postTypePath}/${slug}`}
              href={`/${postTypePath}/[slug]`}>
              <a href={`/${postTypePath}/${slug}`} className="hover:underline">
                {title}
              </a>
            </Link>
          </h3>*/}
          <div className="mb-4 md:mb-0 text-lg">
            <PostDate dateString={date} />
          </div>
        </div>
        <div className="md:pl-2 xl:ml-8">
          <p className="text-lg leading-relaxed mb-4 md:my-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
