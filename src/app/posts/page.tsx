import PostsWithSearch from "@/components/posts-with-search"
import { getPosts } from "@/lib/posts"

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

const PostsPage = async () => {
  const posts = await getPosts()
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        {/* Terminal-style header preview */}
        <div className="flex items-center gap-2 font-mono mb-8">
          <span className="text-primary">$</span>
          <span className="text-muted-foreground">ls</span>
          <span className="text-primary">~/posts</span>
          <span className="text-muted-foreground animate-pulse">▋</span>
        </div>

        <h1 className="title mb-12">Posts</h1>
        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}

export default PostsPage