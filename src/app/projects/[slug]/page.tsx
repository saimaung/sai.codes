import MDXContent from "@/components/mdx-content"
import NewsletterForm from "@/components/newsletter-form"
import { getProjectBySlug } from "@/lib/projects"
import { formatDate } from "@/lib/utils"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"


const Project = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  // server component
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to projects</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
              quality={95}
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>

        <footer className='mt-16'>
          <NewsletterForm />
        </footer>
      </div>
    </section>
  )
}

export default Project