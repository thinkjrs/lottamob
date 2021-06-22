import Link from 'next/link';
import { urlForImage } from '../../lib/sanity';

function Image({ src, title }) {
  return (
    <img
      width={2000}
      height={1000}
      alt={`Introduction for "${title}" content on the site for Lotta Moberg, PhD, CFA.`}
      className="hover:shadow-medium transition-shadow duration-200"
      src={urlForImage(src).height(1000).width(2000).url()}
    />
  );
}
export default function CoverImage({
  title,
  url,
  slug,
  postTypePath = 'blog',
}) {
  const imgLink = `/${postTypePath}/${slug}`;
  return (
    <div className="-mx-5 sm:mx-0">
      <Link as={`/${postTypePath}/${slug}`} href={`/${postTypePath}/[slug]`}>
        <a aria-label={title} href={imgLink}>
          <Image src={url} title={title} />
        </a>
      </Link>
    </div>
  );
}
