declare module 'contentlayer/generated' {
  export type Post = {
    _id: string
    _raw: {
      flattenedPath: string
      sourceFileName: string
    }
    type: 'Post'
    title: string
    date: string
    description: string
    author: string
    image?: string
    tags?: string[]
    body: {
      code: string
    }
    slug: string
    url: string
  }

  export type Author = {
    _id: string
    _raw: {
      flattenedPath: string
    }
    type: 'Author'
    name: string
    avatar: string
    bio: string
  }

  export const allPosts: Post[]
  export const allAuthors: Author[]
} 