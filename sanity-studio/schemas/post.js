export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  description: 'A blog post that lives on the /blog portion of the site.',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'date',
      title: 'Published at datetime',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'markdown',
    },
    {
      name: 'excerpt',
      title: 'Post excerpt for the article preview.',
      type: 'string',
      options: {
        source: 'excerpt',
        maxLength: 180,
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
