import { cn } from '@/lib/cn';
import type { ComponentPropsWithoutRef } from 'react';

export function Textarea({ className, ...props }: ComponentPropsWithoutRef<'textarea'>) {
  return (
    <textarea
      className={cn(
        'min-h-28 w-full rounded-xl border border-foreground/15 bg-background px-3 py-2 text-sm outline-none ring-accent/40 placeholder:text-foreground/40 focus:ring-2',
        className,
      )}
      {...props}
    />
  );
}
