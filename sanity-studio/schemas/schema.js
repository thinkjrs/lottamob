// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import post from './post'
import article from './article'
import research from './research'

const markdownType = {
  name: 'body',
  title: 'Body',
  type: 'markdown',
}

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    post,
    article,
    research,
    markdownType,
  ]),
})
