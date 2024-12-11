import Image from 'next/image'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-8 md:flex-row md:items-center pb-24'>
      <div className='flex-1 space-y-6'>
        {/* Code-style comment */}
        <div className='font-mono text-sm text-zinc-500 dark:text-zinc-400'>&#47;&#42;&#42; Software Engineer specializing in AI Platforms &#42;&#47;</div>

        {/* Main heading */}
        <div>
          <h1 className='title no-underline flex items-center gap-2'>
            <span className='text-purple-700 dark:text-purple-400'>interface</span>
            <span>Developer</span>
            <span className='text-zinc-500 dark:text-zinc-400'>{`{`}</span>
          </h1>
        </div>

        {/* Bio with code-style formatting */}
        <div className='pl-4 font-mono space-y-3'>
          <p className='text-sm'>
            <span className='text-zinc-400'>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className='text-blue-600 dark:text-blue-500'>const</span>{' '}
            <span className='text-blue-700 dark:text-blue-400'>name</span>
            <span className='text-zinc-500 dark:text-zinc-400'>:</span>{' '}
            <span className='text-emerald-600 dark:text-emerald-400'>string</span>{' '}
            <span className='text-zinc-500 dark:text-zinc-400'>=</span>{' '}
            <span className='text-orange-700 dark:text-amber-300'>&quot;Sai&quot;</span>
            <span className='text-zinc-500 dark:text-zinc-400'>;</span>
          </p>
          <p className='text-sm'>
            <span className='text-zinc-400'>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className='text-blue-600 dark:text-blue-500'>const</span>{' '}
            <span className='text-blue-700 dark:text-blue-400'>role</span>
            <span className='text-zinc-500 dark:text-zinc-400'>:</span>{' '}
            <span className='text-emerald-600 dark:text-emerald-400'>string</span>{' '}
            <span className='text-zinc-500 dark:text-zinc-400'>=</span>{' '}
            <span className='text-orange-700 dark:text-amber-300'>&quot;Staff AI Platform Engineer&quot;</span>
            <span className='text-zinc-500 dark:text-zinc-400'>;</span>
          </p>
          <p className='text-sm'>
            <span className='text-zinc-400'>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className='text-blue-600 dark:text-blue-500'>const</span>{' '}
            <span className='text-blue-700 dark:text-blue-400'>focus</span>
            <span className='text-zinc-500 dark:text-zinc-400'>:</span>{' '}
            <span className='text-emerald-600 dark:text-emerald-400'>string</span>{' '}
            <span className='text-zinc-500 dark:text-zinc-400'>=</span>{' '}
            <span className='text-orange-700 dark:text-amber-300'>&quot;Building scalable Data + AI infrastructure&quot;</span>
            <span className='text-zinc-500 dark:text-zinc-400'>;</span>
          </p>
          <p className='text-sm'>
            <span className='text-zinc-400'>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className='text-blue-600 dark:text-blue-500'>const</span>{' '}
            <span className='text-blue-700 dark:text-blue-400'>passion</span>
            <span className='text-zinc-500 dark:text-zinc-400'>:</span>{' '}
            <span className='text-emerald-600 dark:text-emerald-400'>string</span>{' '}
            <span className='text-zinc-500 dark:text-zinc-400'>=</span>{' '}
            <span className='text-orange-700 dark:text-amber-300'>&quot;Sharing insights about Data + AI and software architecture&quot;</span>
            <span className='text-zinc-500 dark:text-zinc-400'>;</span>
          </p>
        </div>

        {/* Closing bracket */}
        <div className='text-zinc-500 dark:text-zinc-400'>{`}`}</div>
      </div>

      {/* Profile image */}
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full md:h-32 md:w-32 ring-2 ring-purple-500/20 bg-muted p-1 hover:ring-purple-500/50 transition-all duration-300">
        <Image
          src="/images/authors/swm.jpeg"
          alt="Sai"
          quality={95}
          priority
          fill
          sizes="(max-width: 768px) 96px, 128px"
          className="object-cover"
        />
      </div>
    </section>
  )
}