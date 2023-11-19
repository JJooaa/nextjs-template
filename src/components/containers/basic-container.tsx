import { cn } from '@/lib/utils'

export function BasicContainer({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('mx-auto max-w-7xl space-y-6 p-4', className)}>{children}</div>
}
