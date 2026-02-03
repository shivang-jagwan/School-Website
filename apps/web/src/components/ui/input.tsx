import { cn } from '@/lib/cn';
import type { ComponentPropsWithoutRef } from 'react';

export function Input({ className, ...props }: ComponentPropsWithoutRef<'input'>) {
  return (
    <input
      className={cn(
        'h-11 w-full rounded-xl border border-foreground/15 bg-background px-3 text-sm outline-none ring-accent/40 placeholder:text-foreground/40 focus:ring-2',
        className,
      )}
      {...props}
    />
  );
}
