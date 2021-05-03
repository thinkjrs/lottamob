import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import CoverImage from '../Posts/CoverImage';
import {parseISO, format} from 'date-fns';

function PostDate({dateString}) {
  if (dateString & (dateString !== 'undefined')) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL	       d, yyyy')}</time>;
  }
  return null
}

function PostTitle({children}) {
  return (
    <h1 className="pt-24 text-6xl text-black md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  );
}

function PostBody({content}) {
  if (typeof content !== 'undefined') {
    return (
      <div className="max-w-2xl mx-auto">
        <BlockContent blocks={content} className="markdown" />
      </div>
    );
  }
  return null
}

function PostHeader({title, coverImage}) {
  if (!title || !coverImage) return null;
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} url={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg text-black">
        </div>
      </div>
    </>
  );
}

export {PostTitle, PostBody, PostHeader, PostDate};
