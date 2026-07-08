import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-azure-500/20 bg-azure-500/5 px-3 py-1 font-mono text-xs text-azure-600 dark:border-sky-400/25 dark:bg-sky-400/10 dark:text-sky-300">
      {children}
    </span>
  )
}
