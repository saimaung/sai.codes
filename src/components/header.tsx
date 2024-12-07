import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import AnimatedLogo from './animated-logo'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/60 border-b border-border/40 py-6 backdrop-blur-md'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <AnimatedLogo />
        </div>

        <ul className='flex items-center gap-6 text-sm font-light text-foreground sm:gap-10'>
          <li className='transition-colors hover:text-muted-foreground'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-muted-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-muted-foreground'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}