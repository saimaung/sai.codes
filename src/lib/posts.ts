import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsContentRootDir = path.join(process.cwd(), 'content', 'posts')

export type Post = {
  metadata: PostMetadata
  content: string
}

export type PostMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  publishedAt?: string
  tags?: string[]
  slug: string
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(postsContentRootDir, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    return {
      metadata: { ...data, slug },
      content
    }
  } catch {
    return null
  }
}

export async function getPosts(limit?: number): Promise<PostMetadata[]> {
  const files = fs.readdirSync(postsContentRootDir)

  const posts = files
    .map(file => getPostMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  if (limit) {
    return posts.slice(0, limit)
  }

  return posts
}

export function getPostMetadata(filepath: string): PostMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(postsContentRootDir, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return { ...data, slug }
}
