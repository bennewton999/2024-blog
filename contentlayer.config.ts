import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import { type Options } from 'rehype-pretty-code';

export const Author = defineDocumentType(() => ({
  name: 'Author',
  filePathPattern: 'authors/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    avatar: { type: 'string', required: true },
    bio: { type: 'string', required: true }
  }
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/*.{md,mdx}',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    author: { type: 'string', required: true },
    image: { type: 'string', required: false },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    twitterThreadUrl: { type: 'string', required: false }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: doc => doc._raw.sourceFileName.replace(/\.(md|mdx)$/, '')
    },
    url: {
      type: 'string',
      resolve: doc =>
        `/blog/${doc._raw.sourceFileName.replace(/\.(md|mdx)$/, '')}`
    }
  }
}));

const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    if (node.properties.className) {
      node.properties.className.push('highlighted');
    }
  }
};

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Author],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
  }
});
