import Link from 'next/link';
import { urlForImage } from '../../lib/sanity';
import { renderToStaticMarkup } from 'react-dom/server';

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
  hero = false,
}) {
  const imgLink = `/${postTypePath}/${slug}`;
  return (
    <div
      id={`${slug}`}
      className="-mx-5 sm:mx-0 content-center items-center text-center"
    >
      <Link as={`/${postTypePath}/${slug}`} href={`/${postTypePath}/[slug]`}>
        <a className="" aria-label={title} href={imgLink}>
          {hero ? (
            <div
              className="antialiased flex leading-snug mx-auto items-center text-center text-gray-50 text-3xl font-bold"
              id="background-pattern-container"
              style={{
                backgroundImage: `url("/protruding-squares.svg")`,
                minHeight: '27rem',
              }}
            >
              <div className="w-full p-2 xl:p-12">{title}</div>
            </div>
          ) : (
            <div
              className="antialiased flex flex-wrap w-auto items-center text-center text-white text-2xl font-semibold tracking-wide"
              id="background-pattern-container"
              style={{
                backgroundImage: `url("/large-triangles.svg")`,
                minHeight: '12.45rem',
              }}
            >
              <div className="p-2 xl:p-12">{title}</div>
            </div>
          )}
        </a>
      </Link>
    </div>
  );
}
