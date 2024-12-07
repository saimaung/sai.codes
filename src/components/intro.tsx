import Image from 'next/image'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-8 md:flex-row md:items-center pb-24'>
      <div className='flex-1'>
        <h1 className='title no-underline'>Hey, I&#39;m Sai.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a Staff AI Platform Engineer. I&#39;m passionate about
          building scalable Data + AI infrastructure. Through this site, I share my
          experiences and insights about Data + AI, and software architecture.
        </p>
      </div>
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full md:h-32 md:w-32 ring-2 ring-border bg-muted p-1">
        <Image
          src="/images/authors/swm.jpeg"
          alt="Sai"
          quality={95}
          priority
          fill
          sizes="(max-width: 768px) 96px, 128px"
          className="object-cover rounded-full"
        />
      </div>
    </section>
  )
}