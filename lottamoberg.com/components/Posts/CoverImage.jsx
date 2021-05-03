import Link from 'next/link';
import {urlForImage} from '../../lib/sanity';

function Image({src, title}) {
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
export default function CoverImage({title, url, slug}) {
  const imgLink = slug ? `/posts/${slug}` : `/${slug}`;
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={imgLink} href="/posts/[slug]">
          <a aria-label={title} href={imgLink}>
            <Image src={url} title={title} />
          </a>
        </Link>
      ) : (
        <Link as={imgLink} href="/posts/">
          <a aria-label={title} href={imgLink}>
            <Image src={url} title={title} />
          </a>
        </Link>
      )}
    </div>
  );
}
