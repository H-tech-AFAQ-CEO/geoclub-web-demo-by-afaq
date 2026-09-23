import * as React from 'react'
import { cn } from '@/lib/utils'
export function Badge({ className, variant = 'default', ...props }: React.ComponentProps<'span'> & { variant?: 'default' | 'secondary' | 'outline' }) { return <span className={cn('inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold', variant === 'secondary' ? 'border-transparent bg-secondary text-secondary-foreground' : variant === 'outline' ? 'text-foreground' : 'border-transparent bg-primary text-primary-foreground', className)} {...props} /> }
