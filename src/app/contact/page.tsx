import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        {/* Main heading with code-like decoration */}
        <div className='mb-8 space-y-2'>
          <div className='text-sm font-mono text-zinc-500'>&#47;&#47; Let&apos;s build something amazing</div>
          <h2 className='title flex items-center gap-2'>
            <span className='text-emerald-500'>function</span>
            <span>connect()</span>
            <span className='text-zinc-400'>{`{`}</span>
          </h2>
        </div>

        {/* Subheading with typing effect */}
        <div className='mb-8 pl-8 border-l-2 border-zinc-800'>
          <p className='text-lg text-zinc-400 font-mono'>
            return new <span className='text-purple-500'>Collaboration</span>
            <span className='text-zinc-500'>.</span>
            <span className='text-emerald-500'>init</span>
            <span className='text-zinc-500'>()</span>
          </p>
        </div>

        {/* Contact form with terminal styling */}
        <div className='overflow-hidden rounded-lg'>
          <ContactForm />
        </div>

        {/* Closing bracket */}
        <div className='mt-8 pl-4 text-zinc-400'>
          <span className='text-2xl'>{`}`}</span>
        </div>
      </div>
    </section>
  )
}