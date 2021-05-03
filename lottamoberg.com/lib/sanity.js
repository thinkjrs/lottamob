// lib/sanity.js
import {
  groq,
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from 'next-sanity'

const config = {
  /**
    * Find your project ID and dataset in `sanity.json` in your studio project.
    * These are considered “public”, but you can use environment variables
    * if you want differ between local dev and production.
    *
    * https://nextjs.org/docs/basic-features/environment-variables
    **/
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  /**
    * Set useCdn to `false` if your application require the freshest possible
    * data always (potentially slightly slower and a bit more expensive).
    * Authenticated request (like preview) will always bypass the CDN
    **/
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = source => createImageUrlBuilder(config).image(source)

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
      h1: 
    }
  },
})
/* BlockRender is a serializer for the sanity BlockContent component.
 * It should be fed into the BlockContent component as ```{types: { block: BlockRenderer }}```.
 */
export const BlockRenderer = (props) => {
  const setTailwindHeadingClass = (level) => {
    let defaultClassStyles = '';
    if (level == 1) {
      return 'text-4xl' + defaultClassStyles;
    }
    if (level == 2) {
      return 'text-3xl' + defaultClassStyles;
    }
    if (level == 3) {
      return 'text-2xl' + defaultClassStyles;
    }
    if (level == 4) {
      return 'text-xl' + defaultClassStyles;
    }
    if (level == 5) {
      return 'text-md font-bold leading-tight' + defaultClassStyles;
    }
    if (level == 6) {
      return 'text-md leading-none' + defaultClassStyles;
    }
    return '';
  };
  const {textStyle = 'normal'} = props.node;

  if (/^h\d/.test(textStyle)) {
    const level = textStyle.replace(/[^\d]/g, '');
    return React.createElement(
      textStyle,
      {className: setTailwindHeadingClass(level)},
      props.children
    );
  }

  if (textStyle === 'blockquote') {
    return <blockquote>- {props.children}</blockquote>;
  }
  if (textStyle === 'normal') {
    return <p className="mb-2">{props.children}</p>;
  }
  // Fall back to default handling
  return <span className="my-1">{props.children}</span>
};
// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)
// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) => (usePreview ? previewClient : sanityClient)

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)
