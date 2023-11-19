import { cn } from '@/lib/utils'

export function H1({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={cn('text-4xl font-extrabold tracking-tighter lg:text-5xl', className)}>
      {children}
    </h1>
  )
}
